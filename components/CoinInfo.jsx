import { HistoricalChart } from "@/config/api";
import { CryptoState } from "@/context/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { chartDays } from "@/config/data";
import SelectButton from "./SelectButton";

const CoinInfo = ({ coin }) => {
  const [historicData, setHisToricData] = useState([]);
  const [days, setDays] = useState(1);
  // const [flag, setflag] = useState(false);

  const { currency } = CryptoState();

  const fetchHistoricalData = async () => {
    // setflag(true);
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));

    setHisToricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="info-container">
        {!historicData ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={200}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);

                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}: ${date.getMinutes()} PM`
                      : `${date.getHours()}: ${date.getMinutes()} AM`;

                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price (Past ${days} Days) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 20,
                width: "100%",
              }}
            >
              {chartDays.map((day) => {
                return (
                  <SelectButton
                    key={day.value}
                    onClick={() => setDays(day.value)}
                    selected={day.value === days}
                  >
                    {day.label}
                  </SelectButton>
                );
              })}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
