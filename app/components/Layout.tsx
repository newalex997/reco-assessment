import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { label: "Home", to: "/", end: true },
  { label: "Dashboard", to: "/dashboard" },
];

export function Layout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Stack direction="row" spacing={1} sx={{ flexGrow: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.to}
                component={NavLink}
                to={item.to}
                end={item.end}
                color="inherit"
                sx={{
                  "&.active": {
                    fontWeight: 700,
                    bgcolor: "action.selected",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <Typography variant="h6" component="div">
            Reco
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ flex: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
