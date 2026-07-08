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
import { usePagination } from "../hooks/usePagination";

export function CompaniesTable() {
  const { data, loading, error, refetch } = useCompanies();
  const { page, rowsPerPage, onChangePage, onChangeRowsPerPage } =
    usePagination(25);

  const handlePageChange = useCallback(
    (_: unknown, newPage: number) => {
      onChangePage(newPage);

      refetch({ pageNumber: newPage, pageSize: rowsPerPage });
    },
    [onChangePage, refetch],
  );

  const handleRowsPerPageChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      onChangeRowsPerPage(parseInt(event.target.value, 10));
      onChangePage(0);

      refetch({ pageNumber: 0, pageSize: parseInt(event.target.value, 10) });
    },
    [onChangePage, onChangeRowsPerPage, refetch],
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
        <Button variant="contained" color="primary" onClick={() => refetch()}>
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
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </Box>
  );
}
