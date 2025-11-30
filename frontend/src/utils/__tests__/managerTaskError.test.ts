import { describe, it, expect } from 'vitest'
import { getCompletedTaskError, type TaskCompletedEventDetail } from '../managerTaskError'

describe('getCompletedTaskError', () => {
  it('returns null when the just-completed task succeeded', () => {
    const eventDetail: TaskCompletedEventDetail = {
      ui_id: 'task-2',
      state: {
        history: {
          'task-1': {
            result: 'error',
            status: { status_str: 'error', messages: ['Old error'] }
          },
          'task-2': {
            result: 'success',
            status: { status_str: 'success', messages: [] }
          }
        }
      }
    }

    // BUG: The old implementation would return 'Old error' because it scanned
    // ALL history looking for ANY error. The correct behavior is to return null
    // because task-2 (the just-completed task) succeeded.
    expect(getCompletedTaskError(eventDetail)).toBeNull()
  })

  it('returns error message when the just-completed task failed', () => {
    const eventDetail: TaskCompletedEventDetail = {
      ui_id: 'task-2',
      state: {
        history: {
          'task-1': {
            result: 'success',
            status: { status_str: 'success', messages: [] }
          },
          'task-2': {
            result: 'error',
            status: { status_str: 'error', messages: ['Dependency conflict detected'] }
          }
        }
      }
    }

    expect(getCompletedTaskError(eventDetail)).toBe('Dependency conflict detected')
  })

  it('returns null when ui_id is missing', () => {
    const eventDetail: TaskCompletedEventDetail = {
      state: {
        history: {
          'task-1': {
            result: 'error',
            status: { status_str: 'error', messages: ['Some error'] }
          }
        }
      }
    }

    expect(getCompletedTaskError(eventDetail)).toBeNull()
  })

  it('returns null when completed task is not in history', () => {
    const eventDetail: TaskCompletedEventDetail = {
      ui_id: 'task-999',
      state: {
        history: {
          'task-1': {
            result: 'error',
            status: { status_str: 'error', messages: ['Some error'] }
          }
        }
      }
    }

    expect(getCompletedTaskError(eventDetail)).toBeNull()
  })

  it('returns "Unknown error" when task failed but has no messages', () => {
    const eventDetail: TaskCompletedEventDetail = {
      ui_id: 'task-1',
      state: {
        history: {
          'task-1': {
            result: 'error',
            status: { status_str: 'error', messages: [] }
          }
        }
      }
    }

    expect(getCompletedTaskError(eventDetail)).toBe('Unknown error')
  })

  it('returns null for empty/undefined eventDetail', () => {
    expect(getCompletedTaskError({})).toBeNull()
    expect(getCompletedTaskError(undefined as any)).toBeNull()
  })
})
