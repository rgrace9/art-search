const getStartIndex = (currentPage, pageSize) => {

  const startIndex = (currentPage - 1) * pageSize;

  return startIndex;
}
const paginate = (pagination) => {
  const {
    totalObjects = 0,
    pageSize = 10,
    currentPage = 1,
    maxPages = 100,
  } = pagination;

  let startPage, endPage;
  const totalPages = Math.ceil((totalObjects + pageSize - 1) / pageSize);


    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    let startIndex = getStartIndex()
    let endIndex = Math.min(startIndex + pageSize - 1, totalObjects - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalObjects: totalObjects,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

const pageObjectIds = (pagination) => {
  const {
    pageSize = 10,
    currentPage = 1,
    objectIds = []
  } = pagination;
  const startIndex = getStartIndex(currentPage, pageSize)

  const res = objectIds.slice(startIndex, startIndex + pageSize)
  return res
}


export {
  paginate,
  pageObjectIds
}