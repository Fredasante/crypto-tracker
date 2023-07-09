"use client";

import { CoinList } from "@/config/api";
import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const Crypto = createContext();
const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setLoading(false);

    setCoins(data);
  };

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "GBP") setSymbol("£");
  }, [currency]);

  return (
    <Crypto.Provider
      value={{ currency, setCurrency, symbol, coins, loading, fetchCoins }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => useContext(Crypto);
