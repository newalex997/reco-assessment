import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    brand: {
      primary: string;
      secondary: string;
    };
  }
  interface ThemeOptions {
    brand?: {
      primary?: string;
      secondary?: string;
    };
  }
}

export const theme = createTheme({
  colorSchemes: { light: true, dark: true },
  typography: {
    fontFamily:
      '"Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  brand: {
    primary: "#393939",
    secondary: "#2E2E2E",
  },
});
