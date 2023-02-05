import {
  Box,
  Container,
  Divider,
  Typography,
  Stack,
  Grid,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { SlBasket } from "react-icons/sl";
import { HiPlus, HiMinus } from "react-icons/hi";

const cartStyle = {
  width: "16rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: ".65rem 0",
  border: "2px solid #536DFE",
  borderRadius: ".25rem",
  cursor: "pointer",
  userSelect: "none",

  ":hover": {
    transform: "scale(0.99)",
  },
};

function Product() {
  const [clotheById, setClotheById] = useState([]);
  const [colorName, setColorName] = useState("");
  const [isColor, setIsColor] = useState(false);
  const [preview, setPreview] = useState("");
  const [size, setSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const btnStyle1 = {
    width: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".75rem 0",
    border: size === "Small" ? "2px solid #536DFE" : "2px solid #e1e1e1",
    borderRadius: ".25rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const btnStyle2 = {
    width: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".75rem 0",
    border: size === "Medium" ? "2px solid #536DFE" : "2px solid #e1e1e1",
    borderRadius: ".25rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const btnStyle3 = {
    width: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".75rem 0",
    border: size === "Large" ? "2px solid #536DFE" : "2px solid #e1e1e1",
    borderRadius: ".25rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const btnStyle4 = {
    width: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".75rem 0",
    border: size === "Extra Large" ? "2px solid #536DFE" : "2px solid #e1e1e1",
    borderRadius: ".25rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const btnStyle5 = {
    width: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".75rem 0",
    border:
      size === "Extra Extra Large" ? "2px solid #536DFE" : "2px solid #e1e1e1",
    borderRadius: ".25rem",
    cursor: "pointer",
    userSelect: "none",
  };

  const btnStyle6 = {
    width: "4.5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: ".75rem 0",
    border:
      size === "Extra Extra Extra Large"
        ? "2px solid #536DFE"
        : "2px solid #e1e1e1",
    borderRadius: ".25rem",
    cursor: "pointer",
    userSelect: "none",
  };

  let params = useParams();

  const getProductById = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/${params.category}/${params.id}`
      );
      setClotheById([res.data]);

      let colorNameSelected = res.data.colors[0].color;
      let preview = res.data.colors[0].preview;
      setColorName(colorNameSelected);
      setIsColor(true);
      setPreview(preview);
    } catch (err) {
      console.log(err);
    }
  };

  const handleColorChange = (colorName, previewImg) => {
    setColorName(colorName);
    setIsColor(!isColor);
    setPreview(previewImg);
  };

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const handleAddQuantity = (totalQty) => {
    if (quantity <= totalQty) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleSubtractQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 10.25rem)",
        pt: mobile ? 10 : 12,
        pb: mobile ? 4 : 6,
      }}
    >
      <Container>
        {clotheById.map((clothe, index) => (
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <img src={preview} alt={preview} style={{ height: "38rem" }} />
              </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box sx={{ pt: 4 }}>
                <Typography variant="h5">{clothe.name}</Typography>
                <Typography sx={{ mt: 1, mb: 2 }}>
                  {clothe.description}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography>{colorName}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mt: 2, mb: 3 }}
                >
                  {clothe.colors.map((color, index) => (
                    <Box
                      key={index}
                      onClick={() =>
                        handleColorChange(color.color, color.preview)
                      }
                      sx={{
                        border:
                          color && colorName === color.color
                            ? "2px solid #536DFE"
                            : "2px solid transparent",
                      }}
                    >
                      <img
                        src={color.image}
                        alt={color.image}
                        style={{ width: "3.5rem", height: "4.5rem" }}
                      />
                    </Box>
                  ))}
                </Stack>
                <Typography>{size}</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ mt: 2, mb: 3, flexWrap: "wrap", gap: 2 }}
                >
                  <Box sx={btnStyle1} onClick={() => handleSizeChange("Small")}>
                    S
                  </Box>
                  <Box
                    sx={btnStyle2}
                    onClick={() => handleSizeChange("Medium")}
                  >
                    M
                  </Box>
                  <Box sx={btnStyle3} onClick={() => handleSizeChange("Large")}>
                    L
                  </Box>
                  <Box
                    sx={btnStyle4}
                    onClick={() => handleSizeChange("Extra Large")}
                  >
                    XL
                  </Box>
                  <Box
                    sx={btnStyle5}
                    onClick={() => handleSizeChange("Extra Extra Large")}
                  >
                    XXL
                  </Box>
                  <Box
                    sx={btnStyle6}
                    onClick={() => handleSizeChange("Extra Extra Extra Large")}
                  >
                    XXXL
                  </Box>
                </Stack>
                <Typography>Quantity</Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  sx={{ mt: 2, mb: 4 }}
                >
                  <Box class="btnMinus" onClick={handleSubtractQuantity}>
                    <HiMinus className="iconQty" />
                  </Box>
                  <Box class="qty">{quantity}</Box>
                  <Box
                    class="btnAdd"
                    onClick={() => handleAddQuantity(clothe.quantity)}
                  >
                    <HiPlus className="iconQty" />
                  </Box>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Button variant="contained" fullWidth sx={{ py: 1.5 }}>
                    Check Out
                  </Button>
                  <Box sx={cartStyle}>
                    <SlBasket
                      style={{
                        fontSize: "1.5rem",
                        color: "#536DFE",
                        marginRight: ".5rem",
                      }}
                    />
                    <Typography>Add to Cart</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

export default Product;
