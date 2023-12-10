import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { Inter, Poppins } from "next/font/google";

export const metadata = {
  title: "ExamShield",
  description: "Detect cheating in your application",
};

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
