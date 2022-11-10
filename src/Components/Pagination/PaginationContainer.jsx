import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../features/allEmployees/allEmployeesSlice";

const PaginationContainer = () => {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allEmployees);

  // Generate an array of all pages
  const allPages = Array.from({ length: numOfPages }, (_, indx) => {
    return indx + 1;
  });
  const changePageAction = (action) => {
    switch (action) {
      case "next":
        let newPageNext = page + 1;
        if (newPageNext > numOfPages) newPageNext = 1;

        dispatch(changePage(newPageNext));
        break;

      case "prev":
        let newPagePrev = page - 1;

        if (newPagePrev < 1) newPagePrev = numOfPages;

        dispatch(changePage(newPagePrev));
        break;

      default:
        console.log("No such option.");
        break;
    }
  };

  return (
    <nav aria-label="Search results pages">
      <ul class="pagination justify-content-center pagination-lg">
        <li class="page-item">
          <button class="page-link" onClick={() => changePageAction("prev")}>
            Previous
          </button>
        </li>
        {/*  */}
        {allPages?.map((pageNum) => (
          <button
            className={
              pageNum === page ? "btn btn-light active" : "btn btn-light"
            }
            key={pageNum}
            onClick={() => dispatch(changePage(pageNum))}
          >
            {pageNum}
          </button>
        ))}
        <li class="page-item">
          <button class="page-link" onClick={() => changePageAction("next")}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationContainer;
