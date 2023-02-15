import { Box, Container, Typography, TextField, Button } from "@mui/material";
import axios from "../api/axios";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import React, { useState, useEffect } from "react";

function SignUp() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   username,
    //   password,
    //   firstName,
    //   email,
    //   lastName,
    //   middleName,
    //   birthday
    // );
    let payload = {
      username: username,
      password: password,
      email: email,
      firstname: firstName,
      middlename: middleName,
      lastname: lastName,
      birthday: birthday,
    };

    if (
      !(
        username === "" &&
        password === "" &&
        email === "" &&
        firstName === "" &&
        lastName === "" &&
        birthday === ""
      )
    ) {
      try {
        const res = await axios.post("http://localhost:8000/accounts", payload);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };
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
          <Box component="form" onClick={handleSubmit}>
            <TextField
              variant="outlined"
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              label="Middle Name"
              onChange={(e) => setMiddleName(e.target.value)}
              value={middleName}
              margin="normal"
              fullWidth
            />
            <TextField
              variant="outlined"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Birthday"
              type="date"
              variant="outlined"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              variant="outlined"
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              type="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Password"
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
