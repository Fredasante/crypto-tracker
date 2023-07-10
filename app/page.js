"use client";

import Alerts from "@/components/Alerts";
import Banner from "@/components/Banner";
import CoinsTable from "@/components/CoinsTable";

export default function Home() {
  return (
    <main>
      <Banner />
      <CoinsTable />
      <Alerts />
    </main>
  );
}
