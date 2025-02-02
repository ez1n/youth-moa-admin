export interface PageResponse<T> {
  totalCount: number
  totalPageCount: number
  isLast: boolean
  content: T[]
}
