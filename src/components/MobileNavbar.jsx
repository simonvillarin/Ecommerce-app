import { Close } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { useNavigate } from "react-router-dom";

const pages = ["ALL", "MEN", "WOMEN", "KIDS", "BABY"];

function MobileNavbar({ openDrawer, handleCloseDrawer }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  let navigate = useNavigate();

  const handleItemButton = (page) => {
    if (page === "ALL") {
      navigate("/");
    } else if (page === "MEN") {
      navigate("/products/men");
    } else if (page === "WOMEN") {
      navigate("/products/women");
    } else if (page === "KIDS") {
      navigate("/products/kids");
    } else {
      navigate("/products/baby");
    }
  };

  return (
    <Drawer anchor="left" open={openDrawer} onClose={handleCloseDrawer}>
      <Box
        sx={{
          width: "320px",
          height: mobile ? "3.5rem" : "4rem",
          backgroundColor: "#536DFE",
        }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ width: "100%", height: "100%", p: 2 }}
        >
          <Close sx={{ color: "#ffffff" }} onClick={handleCloseDrawer} />
        </Stack>
      </Box>
      <Divider />
      <List disablePadding>
        {pages.map((page, index) => (
          <ListItem key={index} disableGutters>
            <ListItemButton onClick={() => handleItemButton(page)}>
              <ListItemText sx={{ textAlign: "center" }}>{page}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default MobileNavbar;
