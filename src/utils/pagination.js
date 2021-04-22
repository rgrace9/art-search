const getStartIndex = (currentPage, pageSize) => {

  const startIndex = (currentPage - 1) * pageSize;

  return startIndex;
}

const totalNumberOfPages = (count = 0, pageSize = 10) => {
  const totalPages = Math.ceil(count / pageSize)
  return totalPages
}

const paginate = (pagination) => {
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
  totalNumberOfPages
}