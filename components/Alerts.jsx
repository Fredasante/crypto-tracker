import { CryptoState } from "@/context/store";
import { Alert, Snackbar } from "@mui/material";

const Alerts = () => {
  const { alert, setAlert } = CryptoState();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar open={alert.open} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={alert.type}
        variant="filled"
        elevation={10}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default Alerts;
