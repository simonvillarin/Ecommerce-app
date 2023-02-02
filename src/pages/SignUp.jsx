import React from "react";
import Button from "@mui/material/Button";
import { Typography, TextField, Box, Container, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <Box>
      <Container maxWidth="sm">
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <Box component="form">
            <Stack
              justifyContent="center"
              alignItems="center"
              spacing={1}
              sx={{ mb: 3.5 }}
            >
              <AccountCircleIcon
                sx={{ fontSize: "3.5rem", color: "#536DFE" }}
              ></AccountCircleIcon>
              <Typography
                gutterBottom
                variant="h4"
                sx={{ color: "#536DFE", fontWeight: "semi-bold" }}
              >
                Sign Up
              </Typography>
            </Stack>
            <Stack
              sx={{ mb: 1 }}
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <TextField
                fullWidth
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                type="text"
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                type="text"
              />
            </Stack>
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              type="text"
            />
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            <TextField
              fullWidth
              margin="normal"
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              type="password"
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Register
            </Button>
            <Stack direction="row" justifyContent="flex-end">
              <Link to="/signIn" sx={{ textAlign: "right" }}>
                Already have an account?
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default SignUp;
