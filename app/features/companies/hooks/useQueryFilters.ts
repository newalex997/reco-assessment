import { useQueryParam } from "~/hooks/useQueryParam";

export function useQueryFilters() {
  const [companyName, setCompanyName] = useQueryParam("name");
  const [companyCategory, setCompanyCategory] = useQueryParam("category");
  const [pageParam, setPage] = useQueryParam("page");
  const [rowsPerPageParam, setRowsPerPage] = useQueryParam("rowsPerPage");

  const parsedPageParam = parseInt(pageParam || "0", 10);
  const parsedRowsPerPageParam = parseInt(rowsPerPageParam || "25", 10);

  const queryFilterParams = {
    pageNumber: parsedPageParam,
    pageSize: parsedRowsPerPageParam,
    name: companyName || undefined,
    category: companyCategory || undefined,
  };

  return {
    setPage,
    setCompanyName,
    setCompanyCategory,
    setRowsPerPage,
    queryFilterParams,
  };
}
