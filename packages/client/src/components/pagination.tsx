export const Pagination = ({ totalPages }: { totalPages: number }) => {
  const paginationArray = Array(totalPages)
  console.log({paginationArray});
  
  return (
    <nav aria-label="Page navigation Breeds App">
      <ul className="inline-flex -space-x-px text-base h-14">
      <li>
              <a href="#" className="flex items-center justify-center px-6 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Siguiente</a>
            </li>
        {
          paginationArray.map((value) => (
            <li key={value}>
              <a href="#" className="flex items-center justify-center px-6 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{value}</a>
            </li>
          ))
        }
        <li>
              <a href="#" className="flex items-center justify-center px-6 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Siguiente</a>
            </li>
      </ul>
    </nav>
  )
}