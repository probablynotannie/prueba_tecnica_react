export const usePagination = (
  data: any[],
  currentPage: number,
  perPage: number,
) => {
  const totalPages = Math.ceil(data.length / perPage);
  const start = (currentPage - 1) * perPage;
  const paginated = data.slice(start, start + perPage);
  return { totalPages, paginated };
};
