import { Inter } from "next/font/google";
import "@styles/globals.css";
import Nav from "@components/Nav";
import { ThemeProvider } from "@components/MaterialTailwind";
import ToTop from "@components/ToTop";
import Footer from "@components/Footer";
import Template from "./Template";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Free Drinks",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <ThemeProvider>
            <Nav />
            {children}
            <Footer />
            <ToTop />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
