export const pagination = ({ page, limit, totalCount }: { page: string, limit: string, totalCount: number }) => {
  const currentPage = parseInt(page, 10) || 1
  const totalPages = Math.ceil(totalCount / parseInt(limit))

  const nextPage = currentPage < totalPages ? currentPage + 1 : null
  const previousPage = currentPage > 1 ? currentPage - 1 : null

  return {
    currentPage,
    nextPage,
    previousPage,
    totalPages
  }
}
