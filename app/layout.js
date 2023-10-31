import "./globals.css";
import Header from "@/components/Header";
import CryptoContext from "../context/store";
import "./globals.css";
import "react-alice-carousel/lib/alice-carousel.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="app">
        <CryptoContext>
          <Header />
          {children}
        </CryptoContext>
      </body>
    </html>
  );
}
