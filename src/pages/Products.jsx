import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Container, Typography } from "@mui/material";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem 1rem",
};

function Products() {
  const [clothes, setClothes] = useState([]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  let navigate = useNavigate();
  let params = useParams();

  const getClothes = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/${params.category}`);
      setClothes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getClothes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.category]);

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 10.25rem)",
        pt: mobile ? 10 : 12,
        pb: mobile ? 4 : 6,
      }}
    >
      <Banner />
      <Container>
        <Typography variant="h5" sx={{ mt: 6, mb: 4 }}>
          {params.category === "men"
            ? "Men's Clothings"
            : params.category === "women"
            ? "Women's Clothings"
            : params.category === "kids"
            ? "Kid's Clothings"
            : "Babies Clothings"}
        </Typography>
        <Box sx={style}>
          {clothes.map((clothe, index) => (
            <Card
              navigate={() =>
                navigate(`/product/${clothe.category}/${clothe.id}`)
              }
              key={index}
              preview={clothe.preview}
              name={clothe.name}
              price={clothe.price}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Products;
