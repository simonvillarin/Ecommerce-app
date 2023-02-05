import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import signIn from "../assets/images/signIn.png";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

function SignIn() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Container>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: "calc(100vh - 10.25rem)",
            gap: !tablet && 6,
          }}
        >
          <img
            src={signIn}
            alt="Sign In"
            style={{ display: tablet ? "none" : "flex" }}
          />
          <Box>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Sign In
            </Typography>
            <Box component="form">
              <TextField
                variant="outlined"
                label="Username"
                margin="normal"
                fullWidth
                required
              />
              <TextField
                type="password"
                variant="outlined"
                label="Password"
                margin="normal"
                fullWidth
                required
              />
              <Button
                variant="contained"
                fullWidth
                sx={{ py: 1.5, mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body2">
                <Link to="/forgot" style={{ textDecoration: "none" }}>
                  Forgot Password?
                </Link>
              </Typography>
              <Typography variant="body2">
                <Link to="/signIn" style={{ textDecoration: "none" }}>
                  Don't have an account? Sign Up
                </Link>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default SignIn;
