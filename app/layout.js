import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import Footer from "./_component/Footer";

const outfit = Outfit({
  
  subsets: ["latin"],
});



export const metadata = {
  title: "Doctor Appointment",
  description: "Book appointments with top doctors easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className}  antialiased`}
      >
        <Header />
  <main className="pt-26">
    {children}
  </main>
  <Footer />
      </body>
    </html>
  );
}
