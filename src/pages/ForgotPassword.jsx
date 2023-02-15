import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import forgotIcon from "../assets/images/forgotpass.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
function ForgotPassword() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ padding: "8.8rem" }}>
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="left">
          <Box>
            <Typography variant="h3" sx={{ mb: 3 }}>
              Reset your password
            </Typography>
            <Box component="form">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ gap: "15px" }}
              >
                <TextField
                  variant="outlined"
                  label="email"
                  fullWidth
                  required
                ></TextField>
                <TextField
                  variant="outlined"
                  label="code"
                  fullWidth
                  required
                ></TextField>
                <TextField
                  variant="outlined"
                  label="New Password"
                  fullWidth
                  required
                ></TextField>
                <TextField
                  variant="outlined"
                  label="Confirm Password"
                  fullWidth
                  required
                ></TextField>
                <Button variant="outlined">Change Password</Button>
              </Stack>
            </Box>
          </Box>
          <Box>
            <img src={forgotIcon} alt="no img" style={{ width: "500px" }} />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default ForgotPassword;
