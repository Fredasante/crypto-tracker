import { Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="tagline">
          <Typography
            className="tagline-1"
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Cosmic Crypto
          </Typography>
          <Typography variant="subtitle-2" style={{ color: "darkgray" }}>
            Get All The Info Regarding Your Favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
