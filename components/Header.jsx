"use client";

import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CryptoState } from "../context/store";
import Link from "next/link";

const Header = () => {
  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Link href={"/"} className="title-link">
              <Typography className="title">Cosmic</Typography>
            </Link>

            <Select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ width: 100, height: 40, marginLeft: 10 }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
            </Select>

            <Link href={"/login"}>
              <Button
                style={{
                  color: "white",
                  marginLeft: 3,
                  borderColor: "white",
                }}
                variant="outlined"
              >
                Login
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
