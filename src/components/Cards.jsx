import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Container, Typography } from "@mui/material";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1.5rem 1rem",
};

function Cards() {
  const [clothes, setClothes] = useState([]);

  let navigate = useNavigate();

  const getClothes = async () => {
    try {
      const res = await axios.get("http://localhost:8000/all");
      setClothes(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getClothes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ mt: 6 }}>
      <Container>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Latest Releases
        </Typography>
        <Box sx={style}>
          {clothes.map((clothe, index) => (
            <Card
              navigate={() =>
                navigate(`/product/${clothe.category}/${clothe.id}`)
              }
              key={index}
              link={`product/${clothe.category}/${clothe.id}`}
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

export default Cards;
