import { useMemo } from "react";
import { useQueryParam } from "~/hooks/useQueryParam";

export function useQueryFilters() {
  const [pageParam, setPage, setMultipleValues] = useQueryParam("page");
  const [companyName, setCompanyName] = useQueryParam("name");
  const [rowsPerPageParam, setRowsPerPage] = useQueryParam("rowsPerPage");
  const [companyCategory, setCompanyCategory] = useQueryParam("category");

  const parsedPageParam = parseInt(pageParam || "0", 10);
  const parsedRowsPerPageParam = parseInt(rowsPerPageParam || "25", 10);

  const queryFilterParams = useMemo(
    () => ({
      pageNumber: parsedPageParam,
      pageSize: parsedRowsPerPageParam,
      appName: companyName || undefined,
      category: companyCategory || undefined,
    }),
    [parsedPageParam, parsedRowsPerPageParam, companyName, companyCategory],
  );

  return {
    setPage,
    setCompanyName,
    setCompanyCategory,
    setRowsPerPage,
    setMultipleValues,
    queryFilterParams,
  };
}
