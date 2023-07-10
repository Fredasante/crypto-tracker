import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AppBar } from "@mui/material";
import Login from "./Login";
import SignUp from "./SignUp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#424242",
  border: "5px solid #000",
  boxShadow: 24,
};

export default function AuthModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(value);

  return (
    <div>
      <Button
        variant="contained"
        style={{ background: "#EEBC1D", width: 85, height: 40, marginLeft: 10 }}
        onClick={handleOpen}
      >
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
          <AppBar
            position="static"
            // style={{ background: "transparent", color: "white" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="user authentification tabs"
              variant="fullWidth"
              style={{ borderRadius: 20 }}
            >
              <Tab label="Login" />
              <Tab label="Sign Up" />
            </Tabs>
          </AppBar>

          {value === 0 && <Login handleClose={handleClose} />}
          {value === 1 && <SignUp handleClose={handleClose} />}
        </Box>
        {/* </Box> */}
      </Modal>
    </div>
  );
}
