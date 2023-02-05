import React, { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Stack,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { SlUser, SlBag, SlMagnifier, SlHome } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileNavbar from "./MobileNavbar";
import { useNavigate } from "react-router-dom";

const pages = ["ALL", "MEN", "WOMEN", "KIDS", "BABY"];
const menuItems = ["My Account", "Sign In", "Sign Up", "Logout"];

const iconSize = {
  fontSize: "1.25rem",
};

function Navbar() {
  const [search, setSearch] = useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const open = Boolean(anchorEl);
  let navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (page) => {
    setAnchorEl(null);

    if (page === "My Account") {
      navigate("/profile");
    } else if (page === "Sign Up") {
      navigate("/signUp");
    } else {
      navigate("/signIn");
    }
  };

  const handleNavbar = (page) => {
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

  useEffect(() => {
    setOpenDrawer(false);
  }, [mobile]);

  const searchContainer = {
    position: !tablet && "relative",
  };

  const inputContainer = {
    position: "absolute",
    top: mobile ? "3rem" : tablet ? "4rem" : "130%",
    left: tablet && "0",
    right: "0",
    display: search ? "flex" : "none",
    width: tablet ? "100%" : "25rem",
    borderRadius: ".25rem",
    backgroundColor: "#ffffff",
  };

  const input = {
    width: "100%",
    padding: ".875rem 1rem",
    outline: "none",
    border: "2px solid #536DFE",
    borderRadius: !tablet && ".25rem",
    fontSize: "1rem",
    fontFamily: "inherit",
    backgroundColor: "transparent",
  };

  return (
    <AppBar>
      <Toolbar>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <RxHamburgerMenu
              style={{ display: tablet ? "flex" : "none", fontSize: "1.25rem" }}
              onClick={() => setOpenDrawer(true)}
            />
            <Stack
              direction="row"
              spacing={mobile ? 1 : 1.5}
              justifyContent="space-between"
              alignItems="center"
            >
              <SlHome style={iconSize} />
              <Typography
                variant="body1"
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                NIGHT MARKET
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              sx={{ display: tablet ? "none" : "flex" }}
            >
              {pages.map((page, index) => (
                <Typography
                  variant="body1"
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleNavbar(page)}
                >
                  {page}
                </Typography>
              ))}
            </Stack>
            <Stack direction="row" spacing={mobile ? 3 : 4}>
              <Box sx={searchContainer}>
                <SlMagnifier
                  style={iconSize}
                  onClick={() => setSearch(!search)}
                />
                <Box sx={inputContainer}>
                  <input type="text" style={input} placeholder="Search" />
                </Box>
              </Box>
              <Box>
                <SlUser
                  style={iconSize}
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {menuItems.map((menuItem, index) => (
                    <MenuItem key={index} onClick={() => handleClose(menuItem)}>
                      <Typography variant="body2"> {menuItem}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <SlBag style={iconSize} />
            </Stack>
          </Stack>
          <MobileNavbar
            openDrawer={openDrawer}
            handleCloseDrawer={() => setOpenDrawer(false)}
          />
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
