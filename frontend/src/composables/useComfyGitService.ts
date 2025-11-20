import { ref } from 'vue'
import type {
  ComfyGitStatus,
  CommitResult,
  LogResult,
  ExportResult
} from '@/types/comfygit'

// Access ComfyUI's API
declare global {
  interface Window {
    app?: {
      api: {
        fetchApi: (endpoint: string, options?: RequestInit) => Promise<Response>
      }
    }
  }
}

export function useComfyGitService() {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    if (!window.app?.api) {
      throw new Error('ComfyUI API not available')
    }

    const response = await window.app.api.fetchApi(endpoint, options)

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || errorData.message || `Request failed: ${response.status}`)
    }

    return response.json()
  }

  async function getStatus(): Promise<ComfyGitStatus> {
    return fetchApi<ComfyGitStatus>('/v2/comfygit/status')
  }

  async function commit(message: string, allowIssues = false): Promise<CommitResult> {
    return fetchApi<CommitResult>('/v2/comfygit/commit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, allow_issues: allowIssues })
    })
  }

  async function getHistory(limit = 10, offset = 0): Promise<LogResult> {
    return fetchApi<LogResult>(`/v2/comfygit/log?limit=${limit}&offset=${offset}`)
  }

  async function exportEnv(outputPath?: string): Promise<ExportResult> {
    return fetchApi<ExportResult>('/v2/comfygit/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ output_path: outputPath })
    })
  }

  return {
    isLoading,
    error,
    getStatus,
    commit,
    getHistory,
    exportEnv
  }
}
