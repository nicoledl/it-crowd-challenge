import "../src/styles/globals.css";
import Providers from "./utils/prividers";

// Fonts
import { Inter, Montserrat } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "IT Crowd Challenge",
  description: "IT Crowd Challenge by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} dark:bg-black/80 ease-in-out duration-300`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
