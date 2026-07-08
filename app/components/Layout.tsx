import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { label: "Apps Discovery", to: "/", end: true },
  { label: "Apps Inventory", to: "/inventory" },
  { label: "Settings", to: "/settings" },
];

const Root = styled(Box)`
  display: flex;
  gap: 16px;
  flex-direction: row;
  min-height: 100vh;
  background-color: #2e2e2e;
`;

const Section = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const NavButton = styled(NavLink)`
  color: #ffffff;
  padding: 8px 16px;
  text-decoration: none;
  border-left: 2px solid transparent;

  &.active {
    border-left: 2px solid #b5e600;
  }
`;

const SidebarNav = styled(Box)`
  display: flex;
  padding: 16px;
  background-color: #393939;
  flex-direction: column;
`;

const AppLogo = styled.img`
  height: 48px;
  margin-bottom: 32px;
`;

export function Layout() {
  return (
    <Root>
      <SidebarNav>
        <AppLogo src="/logo.svg" alt="App Logo" />

        <Stack direction="column" spacing={1}>
          {navItems.map((item) => (
            <NavButton
              key={item.to}
              to={item.to}
              end={item.end}
              color="inherit"
            >
              {item.label}
            </NavButton>
          ))}
        </Stack>
      </SidebarNav>

      <Section sx={{ flexGrow: 1 }}>
        <Outlet />
      </Section>
    </Root>
  );
}
