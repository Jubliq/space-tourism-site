import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const getBellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ["400"],
});

const getBarlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "400"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "400"],
});

export const metadata = {
  title: {
    template: "%s | Space Tourism",
    default: "Welcome | Space Tourism",
  },
  description: "Explore the space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getBellefair.variable} ${getBarlow.variable}
    ${barlowCondensed.variable} antialiased min-h-screen flex flex-col `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
