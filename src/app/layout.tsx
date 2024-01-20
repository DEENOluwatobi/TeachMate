import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";


export const metadata: Metadata = {
  title: "Dashboard|Teachmate AI ",
  description: "Dashboard for Teachmate AI",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
