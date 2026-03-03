import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Muhammad Fahri | Financial Education Platform",
  description: "Trader Saham | Crypto Strategist | Risk Manager"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-bg text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
