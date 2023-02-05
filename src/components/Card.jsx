import * as React from "react";
import design from "../css/Card.module.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export default function RecipeReviewCard({ products }) {
  return (
    <div className={design.content}>
      {products.map((prod) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader title={prod.title} subheader={prod.category} />

            <CardMedia
              component="img"
              style={{ width: "100%", height: "40vh", objectFit: "contain" }}
              image={prod.image}
            />
            <CardContent>
              <Typography variant="body1" color="text.primary">
                $ {prod.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
