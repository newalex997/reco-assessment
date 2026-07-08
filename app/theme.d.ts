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
