import Link from "next/link";
import Banner from "./Banner";
import { Button, Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div>
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

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Link href={"/dashboard"}>
          <Button sx={{ mt: 5 }} variant="contained">
            Click to visit Dashboard
          </Button>
        </Link>

        <Typography
          variant="subtitle-1"
          style={{ color: "darkgray", margin: 40 }}
        >
          Keep up-to-date with your cryptocurrencies using our crypto portfolio
          stats app ✔️ Free ✔️ Secure ✔️ Private ✔️ Real-time data ✔️ Thousands
          of coins & tokens ✔️
        </Typography>
      </div>
    </div>
  );
};

export default HomePage;
