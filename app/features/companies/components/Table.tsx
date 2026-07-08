import { useCallback } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Button,
  CircularProgress,
} from "@mui/material";
import { useCompanies } from "../hooks/useCompanies";
import { useQueryFilters } from "../hooks/useQueryFilters";

export function CompaniesTable() {
  const { queryFilterParams, setPage, setRowsPerPage } = useQueryFilters();
  const { data, loading, error, refetch } = useCompanies(queryFilterParams);

  const handlePageChange = useCallback(
    (_: unknown, newPage: number) => {
      refetch({ pageNumber: newPage, pageSize: queryFilterParams.pageSize });
      setPage(newPage.toString());
    },
    [setPage, refetch],
  );

  const handleRowsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setPage("0");
      setRowsPerPage(event.target.value);
      refetch({ pageNumber: 0, pageSize: parseInt(event.target.value, 10) });
    },
    [setPage, setRowsPerPage, refetch],
  );

  if (loading) {
    return (
      <Box sx={{ color: "text.secondary", flex: 1 }}>
        <CircularProgress aria-label="Loading…" />
      </Box>
    );
  }

  if (error || !data) {
    return (
      <Box sx={{ color: "error.main", flex: 1 }}>
        <Typography>Error: {error}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => refetch(queryFilterParams)}
        >
          Retry
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TableContainer
        component={Paper}
        sx={{ height: "100%", overflowY: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>App ID</TableCell>
              <TableCell>App Name</TableCell>
              <TableCell>App Sources</TableCell>
              <TableCell>Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.appRows.map((company) => (
              <TableRow key={company.appId}>
                <TableCell>{company.appId}</TableCell>
                <TableCell>{company.appName}</TableCell>
                <TableCell>{company.appSources.join(", ")}</TableCell>
                <TableCell>{company.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50]}
        component="div"
        count={data.totalCount}
        rowsPerPage={queryFilterParams.pageSize}
        page={queryFilterParams.pageNumber}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
}
