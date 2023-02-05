import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

function Offers() {
  return (
    <Box sx={{ py: 3, backgroundColor: "#F0F0F0" }}>
      <Container>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%", mx: "auto" }}
        >
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <img
                src="https://shop.bench.com.ph/media/free-delivery.png"
                alt="Free Shipping"
                style={{ width: "3.25rem" }}
              />
              <Typography variant="body2">FREE SHIPPING</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <img
                src="https://shop.bench.com.ph/media/medal.png"
                alt="LifeStyle Rewards"
                style={{ width: "3.25rem" }}
              />
              <Typography variant="body2">LIFESTYLE REWARDS</Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <img
                src="https://shop.bench.com.ph/media/guarantee.png"
                alt="100% Money Back Guaranteed"
              />
              <Typography variant="body2">100% AUTHENTIC GUARANTEED</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Offers;
