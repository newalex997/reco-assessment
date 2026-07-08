export interface Company {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
}

export interface GetCompaniesParams {
  pageNumber: number;
  pageSize: number;
  appName?: string;
  category?: string;
}

export interface GetCompaniesResponse {
  totalCount: number;
  appRows: Company[];
}
