import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { SidebarFilters } from "~/features/companies/components/SidebarFilters";
import { CompaniesTable } from "~/features/companies/components/Table";

const SectionWrap = styled(Box)`
  background-color: #393939;
  padding: 16px;
`;

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: 1, py: 2, flex: 1 }}>
      <SectionWrap sx={{ flex: 4, padding: 0 }}>
        <CompaniesTable />
      </SectionWrap>
      <SectionWrap>
        <SidebarFilters />
      </SectionWrap>
    </Box>
  );
}
