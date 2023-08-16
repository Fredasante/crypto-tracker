import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";

export default function Accordions() {
  return (
    <Box sx={{ mt: 1, mb: 5 }}>
      <div className="tagline">
        <Typography
          className="tagline-1"
          variant="h3"
          style={{ fontWeight: "bold", marginBottom: 15 }}
        >
          Cosmic Crypto Tracker
        </Typography>
        <Typography variant="h6" style={{ color: "darkgray" }}>
          Got Questions?
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Accordion sx={{ width: "85%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is Cosmic Cryptocurrency Tracker?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Cosmic Crypto is a cryptocurrency tracker for prices, stats,
              charts and market capitalizations. You can get all the information
              regarding your favourite cryptocurrency here.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "85%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>I have a question, how do I contact you?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>You can contact me via +233 20 323 1840</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ width: "85%" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Is there a mobile application for Cosmic Cryptocurrency Tracker
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Currently only the web application is available.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
