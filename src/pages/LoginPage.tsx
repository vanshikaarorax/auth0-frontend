import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Typography, Box } from "@mui/material";

const Login: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={10} p={4} boxShadow={3} borderRadius={2} bgcolor="white">
        <Typography variant="h4" gutterBottom>
          Welcome to My App
        </Typography>
        <Button variant="contained" color="primary" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
