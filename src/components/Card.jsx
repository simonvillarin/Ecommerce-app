import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Card({ link, preview, name, price, navigate }) {
  return (
    <Box onClick={navigate}>
      <Stack>
        <img src={preview} alt={preview} />
        <Box sx={{ p: 1 }}>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            {name}
          </Typography>
          <Typography variant="body2">{price}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Card;
