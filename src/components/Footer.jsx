import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box sx={{ py: 1, background: "#536DFE", color: "#fff" }}>
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography sx={{ textAlign: "center" }}>
            All Rights Reserved. © Simon James Villarin, Mark Denver Perez,
            Matthew Adaro.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;
