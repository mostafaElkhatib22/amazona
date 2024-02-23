import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
const inter = Inter({ subsets: ["latin"] });
const date = new Date().getFullYear();
export const metadata = {
  title: "Amazona",
  description: "Modern Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright &copy; {date} All right reserved by amazona</p>
            <h1>Created by dev M.Elkhatib</h1>
          </footer>
        </div>
      </body>
    </html>
  );
}
