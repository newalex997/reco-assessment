import { useState } from "react";

export function usePagination(initialPageSize: number = 25) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(initialPageSize);

  const onChangePage = (nextValue: number) => {
    setPage(nextValue);
  };

  const onChangeRowsPerPage = (nextValue: number) => {
    setRowsPerPage(nextValue);
  };

  return {
    page,
    rowsPerPage,
    onChangePage,
    onChangeRowsPerPage,
  };
}
