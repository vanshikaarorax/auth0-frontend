import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const App: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isAuthenticated ? <Dashboard /> : <Login />}
    </ThemeProvider>
  );
};

export default App;
