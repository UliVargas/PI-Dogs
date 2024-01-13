export interface Pagination {
  totalCount: number
  currentPage: number
  nextPage: number | null
  previousPage: number | null
  totalPages: number
}