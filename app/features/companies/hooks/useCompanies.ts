import { useCallback, useState } from "react";
import type {
  GetCompaniesParams,
  GetCompaniesResponse,
} from "../types/company";
import { getCompanies } from "../api/getCompanies";

export function useCompanies() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<GetCompaniesResponse>();

  const fetchCompanies = useCallback(async (params: GetCompaniesParams) => {
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
  }, []);

  return { data: responseData, loading, error, refetch: fetchCompanies };
}
