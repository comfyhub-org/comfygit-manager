/**
 * Utility for detecting errors in Manager task completion events.
 *
 * When a cm-task-completed event fires, we need to check if the JUST-completed
 * task failed, not whether any historical task ever failed.
 */

export interface TaskHistoryEntry {
  result?: string
  status?: {
    status_str?: string
    messages?: string[]
  }
}

export interface TaskCompletedEventDetail {
  ui_id?: string
  state?: {
    history?: Record<string, TaskHistoryEntry>
  }
}

/**
 * Check if the just-completed task failed and extract error info.
 *
 * @param eventDetail - The detail object from cm-task-completed event
 * @returns Error message if the just-completed task failed, null otherwise
 */
export function getCompletedTaskError(eventDetail: TaskCompletedEventDetail): string | null {
  const { ui_id, state } = eventDetail || {}
  const history = state?.history || {}

  // Must have a ui_id to identify which task just completed
  if (!ui_id) {
    return null
  }

  // Look up ONLY the task that just completed
  const completedTask = history[ui_id]
  if (!completedTask) {
    return null
  }

  // Check if THIS specific task failed
  if (completedTask.result === 'error' && completedTask.status?.status_str === 'error') {
    const messages = completedTask.status.messages || []
    return messages[0] || 'Unknown error'
  }

  return null
}
