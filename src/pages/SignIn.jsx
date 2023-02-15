import React, { useRef, useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import signIn from "../assets/images/signIn.png";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

const LOGIN_URL = "";
function SignIn() {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));

  const { setAuth } = useContext(AuthContext);
  let navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!(username === "" && password === "")) {
        setUsername("");
        setPassword("");
        const accounts = await axios.get("http://localhost:8000/accounts");
        const user = accounts.data.find(
          (x) => x.username === username && x.password === password
        );
        if (user) {
          setAuth(username);
          navigate("/");
        } else {
          console.log("No information of user found");
        }
      }
    } catch (e) {}
  };

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
            {/* <Typography>{errRef}</Typography> */}
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                label="Username"
                ref={userRef}
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                autoComplete="off"
                margin="normal"
                fullWidth
                required
              />
              <TextField
                type="password"
                variant="outlined"
                label="Password"
                ref={userRef}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                margin="normal"
                fullWidth
                required
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
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
