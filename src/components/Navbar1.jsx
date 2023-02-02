import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import StoreIcon from "@mui/icons-material/Store";

function Navbar1() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <StoreIcon fontSize="large" sx={{ mr: 1 }} />
          <Typography variant="h6">Night Market</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar1;
