export interface WorkflowSyncStatus {
  new: string[]
  modified: string[]
  deleted: string[]
  synced: string[]
  total: number
}

export interface GitChanges {
  nodes_added: string[]
  nodes_removed: string[]
  workflow_changes: boolean
  has_other_changes: boolean
}

export interface ComparisonStatus {
  is_synced: boolean
  missing_nodes: string[]
  extra_nodes: string[]
}

export interface ComfyGitStatus {
  environment: string
  branch: string | null
  is_detached_head: boolean
  is_synced: boolean
  has_changes: boolean
  workflows: WorkflowSyncStatus
  git_changes: GitChanges
  comparison: ComparisonStatus
  missing_models_count: number
}

export interface CommitInfo {
  hash: string
  short_hash?: string
  message: string
  date: string
  date_relative?: string
  relative_date?: string
  refs?: string[]
}

export interface CommitResult {
  status: 'success' | 'no_changes' | 'blocked' | 'error'
  message?: string
  summary?: {
    new: number
    modified: number
    deleted: number
  }
  issues?: Array<{
    name: string
    issue: string
  }>
}

export interface ExportResult {
  status: 'success' | 'error'
  path?: string
  models_without_sources?: number
  message?: string
}

export interface LogResult {
  commits: CommitInfo[]
  has_more: boolean
  current_branch: string | null
}
