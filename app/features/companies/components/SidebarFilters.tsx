import { Box, Input, Typography } from "@mui/material";
import { useQueryFilters } from "../hooks/useQueryFilters";

export function SidebarFilters() {
  const { queryFilterParams, setMultipleValues } = useQueryFilters();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleValues({ name: event.target.value, page: "0" });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleValues({ category: event.target.value, page: "0" });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h6" component="h2">
        Filters
      </Typography>

      <Input
        placeholder="Name"
        value={queryFilterParams.appName}
        onChange={handleNameChange}
      />
      <Input
        placeholder="Category"
        value={queryFilterParams.category}
        onChange={handleCategoryChange}
      />
    </Box>
  );
}
