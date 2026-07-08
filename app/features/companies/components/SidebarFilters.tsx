import { Box, Input } from "@mui/material";

export function SidebarFilters() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Input placeholder="Search" />
      <Input placeholder="Search" />
    </Box>
  );
}
