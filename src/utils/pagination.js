const getStartIndex = (currentPage, pageSize) => {

  const startIndex = (currentPage - 1) * pageSize;

  return startIndex;
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
}