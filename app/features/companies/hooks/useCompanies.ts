import { useEffect, useState } from "react";
import type {
  GetCompaniesParams,
  GetCompaniesResponse,
} from "../types/company";
import { getCompanies } from "../api/getCompanies";

export function useCompanies(
  initialParams: GetCompaniesParams = { pageNumber: 0, pageSize: 25 },
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<GetCompaniesResponse | null>(
    null,
  );

  const fetchCompanies = async (params: GetCompaniesParams) => {
    setLoading(true);
    setError(null);
    try {
      const response = await getCompanies(params);
      setResponseData(response);
    } catch (err) {
      setError("Failed to fetch companies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies(initialParams);
  }, []);

  return { data: responseData, loading, error, refetch: fetchCompanies };
}
