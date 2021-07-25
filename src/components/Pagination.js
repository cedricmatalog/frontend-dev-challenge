export default function Pagination({
  pagesCount,
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="flex-grow">
      <div className="h-3/6"></div>
      <div className="flex justify-between h-3/6 bg-1F1F1F">
        <div className="flex items-center just pl-4">
          {[...Array(pagesCount)].map((e, i) => (
            <button
              className={`bg-2D2F36 p-1 px-3 m-1 rounded text-white border-b-2 ${
                i === currentPage ? 'border-F2C94C' : 'border-3F414B'
              }`}
              key={i}
              onClick={() => {
                setCurrentPage(i);
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center just pr-4">
          <button
            className="bg-2D2F36 p-1 px-3 m-1 rounded text-white"
            style={{
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
            }}
            onClick={() => {
              if (currentPage !== 0) {
                setCurrentPage(currentPage - 1);
              }
            }}
          >
            Prev
          </button>
          <button
            className="bg-2D2F36 p-1 px-3 m-1 rounded text-white"
            style={{
              cursor:
                currentPage === pagesCount - 1 ? 'not-allowed' : 'pointer',
            }}
            onClick={() => {
              if (currentPage !== pagesCount - 1) {
                setCurrentPage(currentPage + 1);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
