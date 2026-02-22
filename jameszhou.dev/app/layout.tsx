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
  metadataBase: new URL('https://jameszhou.dev'),
  title: "James Zhou",
  description: "Portfolio site for James Zhou — projects, writing, and contact",
  openGraph: {
    images: ['/umd.png'],
  },
  icons: {
    icon: '/umd.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable} antialiased`}>
        <main>
          {children}
        </main>

        
      </body>
    </html>
  );
}
