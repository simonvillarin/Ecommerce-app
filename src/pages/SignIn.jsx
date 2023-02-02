import React from "react";
import Navbar1 from "../components/Navbar1";
import Box from "@mui/material/Box";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SignInImg from "../assets/images/signIn.png";
import { Link } from "react-router-dom";

const style = {
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
};

function SignIn() {
  return (
    <Box sx={style}>
      <Navbar1 />
      <Container sx={{ py: 3 }}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{ height: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <img
              src={SignInImg}
              alt="Sign In"
              sx={{ display: { sm: "none" } }}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Box>
              <Typography variant="h5">Sign In</Typography>
              <Box component="form" sx={{ mt: 1 }}>
                <TextField
                  label="Username"
                  margin="normal"
                  fullWidth
                  required
                  autoFocus
                />
                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  fullWidth
                  required
                  autoFocus
                />
                <Button
                  type="submit"
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
                <Link to="/forgot">Forgot Password?</Link>
                <Link to="/signUp">Don't you have an account? Sign Up</Link>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}

export default SignIn;
