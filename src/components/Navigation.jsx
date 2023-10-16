import Link from "next/link";

export default function Navigation({
  length,
  itemsPerPage,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(length / itemsPerPage);

  // Function to handle page change
  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-10"
      aria-label="Table navigation"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 sm:space-y-0 p-1">
        <span className="text-md sm:text-md font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {currentPage === 1 ? 1 : (currentPage - 1) * itemsPerPage + 1}
          </span>{" "}
          -{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {Math.min(currentPage * itemsPerPage, length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {length}
          </span>
        </span>
        <div>
          <Link
            href="https://1drv.ms/x/s!Ap4yMBR9mlQMlhcY6NXaI8vx6Q2I?e=zcJGld"
            className="text-md text-blue-500"
          >
            Click here to see sales report
          </Link>
        </div>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <button
              type="button"
              onClick={() => handlePageClick(currentPage - 1)}
              className={`flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === 1 ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === 1}
            >
              <span className="sr-only">Previous</span>
              <i className="fa-solid fa-chevron-left text-[10px]"></i>
            </button>
          </li>
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => handlePageClick(index + 1)}
                className={`flex items-center justify-center text-xs z-10 py-2 px-3 leading-tight ${
                  currentPage === index + 1
                    ? "text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => handlePageClick(currentPage + 1)}
              className={`flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === totalPages ? "cursor-not-allowed" : ""
              }`}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
