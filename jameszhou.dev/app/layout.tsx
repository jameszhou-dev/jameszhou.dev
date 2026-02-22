import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James Zhou — Portfolio",
  description: "Portfolio site for James Zhou — projects, writing, and contact",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
