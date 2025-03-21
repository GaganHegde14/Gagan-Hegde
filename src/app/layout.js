import "./globals.css";
import { Providers } from "@/context/Providers";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Portfolio | Full Stack Developer",
  description: "A feature-rich portfolio website built with the MERN stack",
  keywords:
    "portfolio, web developer, full stack, MERN, React, Node.js, MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
