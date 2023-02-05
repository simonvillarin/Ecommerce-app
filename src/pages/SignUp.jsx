import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import React from "react";

function SignUp() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 10.25rem)",
        pt: mobile ? 10 : 12,
      }}
    >
      <Container maxWidth="sm">
        <Box>
          <Typography variant="h5" sx={{ mb: 1 }}>
            Personal Information
          </Typography>
          <Box component="form">
            <TextField
              variant="outlined"
              label="First Name"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              label="Middle Name"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              label="Last Name"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              type="date"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <Typography variant="h5" sx={{ mt: 3, mb: 1 }}>
              Sign In Information
            </Typography>
            <TextField
              variant="outlined"
              label="Email"
              margin="normal"
              fullWidth
              required
            />
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
              label="First Name"
              margin="normal"
              fullWidth
              required
            />
            <TextField
              type="password"
              variant="outlined"
              label="Confirm Password"
              margin="normal"
              fullWidth
              required
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ py: 1.5, mt: 3, mb: 4 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SignUp;
