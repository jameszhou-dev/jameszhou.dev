import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "James Zhou — Portfolio",
  description: "Portfolio site for James Zhou — projects, writing, and contact",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <main>
          {children}
        </main>

        <footer className="py-12">
          <div className="site-container text-center muted">
            © {new Date().getFullYear()} James Zhou — Built with Next.js
          </div>
        </footer>
      </body>
    </html>
  );
}
