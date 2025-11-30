/**
 * Orchestrator Service Composable (Phase 2 - Control Endpoints)
 *
 * Provides methods to interact with the orchestrator control server,
 * which runs on port 8189-8199 and survives ComfyUI restarts.
 */

import { ref } from 'vue'
import { fetchWithTimeout } from '@/utils/fetchWithTimeout'

export interface OrchestratorHealth {
  status: string
  pid: number
  current_env: string
  supervised: boolean
  comfyui?: {
    pid: number
    running: boolean
    uptime_seconds: number
  }
}

export interface OrchestratorStatus {
  state: string
  current_env?: string
  message?: string
  progress?: number
  target_env?: string
  source_env?: string
  error?: string
  recovery_command?: string
}

export function useOrchestratorService() {
  const controlPort = ref<number | null>(null)

  /**
   * Discover the orchestrator control port.
   * First tries to read from backend, then falls back to default.
   */
  async function discoverControlPort(): Promise<number | null> {
    // Try to read port from backend
    try {
      const response = await fetchWithTimeout(
        'http://127.0.0.1:8188/api/v2/comfygit/orchestrator_port',
        {},
        5000
      )
      if (response.ok) {
        const data = await response.json()
        return data.port
      }
    } catch {
      // Backend not responding, try default
    }

    // Fall back to default
    return 8189
  }

  /**
   * Check orchestrator health.
   * Returns null if orchestrator is not responding.
   */
  async function checkHealth(): Promise<OrchestratorHealth | null> {
    if (!controlPort.value) {
      controlPort.value = await discoverControlPort()
    }

    if (!controlPort.value) {
      return null
    }

    try {
      const response = await fetchWithTimeout(
        `http://127.0.0.1:${controlPort.value}/health`,
        {},
        5000
      )
      if (!response.ok) throw new Error('Health check failed')
      return await response.json()
    } catch (error) {
      // Try re-discovering port
      controlPort.value = await discoverControlPort()
      return null
    }
  }

  /**
   * Get current switch status from orchestrator.
   */
  async function getStatus(): Promise<OrchestratorStatus | null> {
    if (!controlPort.value) {
      controlPort.value = await discoverControlPort()
    }

    if (!controlPort.value) {
      return null
    }

    try {
      const response = await fetchWithTimeout(
        `http://127.0.0.1:${controlPort.value}/status`,
        {},
        5000
      )
      if (!response.ok) throw new Error('Failed to get status')
      return await response.json()
    } catch (error) {
      return null
    }
  }

  /**
   * Request orchestrator to restart current environment.
   */
  async function restart(): Promise<void> {
    if (!controlPort.value) {
      controlPort.value = await discoverControlPort()
    }

    if (!controlPort.value) {
      throw new Error('Control port not available')
    }

    const response = await fetchWithTimeout(
      `http://127.0.0.1:${controlPort.value}/restart`,
      { method: 'POST' },
      10000
    )

    if (!response.ok) {
      throw new Error('Failed to restart')
    }
  }

  /**
   * Request orchestrator to shutdown completely.
   */
  async function kill(): Promise<void> {
    if (!controlPort.value) {
      controlPort.value = await discoverControlPort()
    }

    if (!controlPort.value) {
      throw new Error('Control port not available')
    }

    const response = await fetchWithTimeout(
      `http://127.0.0.1:${controlPort.value}/kill`,
      { method: 'POST' },
      10000
    )

    if (!response.ok) {
      throw new Error('Failed to kill orchestrator')
    }
  }

  return {
    controlPort,
    discoverControlPort,
    checkHealth,
    getStatus,
    restart,
    kill
  }
}
