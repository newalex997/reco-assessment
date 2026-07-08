import { fetchApi } from "~/lib/fetchApi";
import type {
  GetCompaniesParams,
  GetCompaniesResponse,
} from "../types/company";

export async function getCompanies(
  params: GetCompaniesParams,
): Promise<GetCompaniesResponse> {
  return fetchApi<GetCompaniesResponse>("/app-service/get-apps", {
    method: "PUT",
    body: JSON.stringify(params),
  });
}
