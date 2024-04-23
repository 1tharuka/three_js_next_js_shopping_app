import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/components/nav";
import Footer from "../components/ui/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "T Shirts",
  description: "T Shirts web sites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className && "p-2 m-2"}>
        <nav>
          <Navbar />
        </nav>
        <main>
         {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
