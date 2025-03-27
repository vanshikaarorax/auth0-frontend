import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Button, Container, Typography, Box, Avatar, Stack, TextField } from "@mui/material";

const Dashboard: React.FC = () => {
  const { logout, user, getAccessTokenSilently } = useAuth0();

  const sendTokenToBackend = async () => {
    try {
      console.log(" Attempting to get token...");
      const token = await getAccessTokenSilently();
      console.log(" Token Retrieved:", token);

      console.log(" Sending token to backend...");
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/callback`, { token });

      console.log("Server Response:", response.data);
      alert("Token sent successfully! Check your email.");
    } catch (error: any) {
      console.error("Error sending token:", error.response?.data || error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={10} p={4} boxShadow={3} borderRadius={2} bgcolor="white">
        <Typography variant="h4" gutterBottom>
          Welcome, {user?.name}!
        </Typography>

        
        <Stack spacing={2} alignItems="center">
          <Avatar alt={user?.email} src={user?.picture} sx={{ width: 75, height: 75 }} />
          <TextField id="email" label="Email" value={user?.email} variant="outlined" fullWidth disabled />
          <TextField id="nickname" label="Nickname" value={user?.nickname} variant="outlined" fullWidth disabled />
        </Stack>

       
        <Stack spacing={2} direction="row" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Logout
          </Button>
          <Button variant="contained" color="primary" onClick={sendTokenToBackend}>
            Send Token to Backend
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Dashboard;
