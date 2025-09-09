import { Chakra_Petch } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra-petch",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "FestConnect",
  description:
    "Your all-in-one platform for managing fests, events, and experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${chakraPetch.variable}`}>{children}</body>
    </html>
  );
}
