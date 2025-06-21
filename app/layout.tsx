import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { StagewiseToolbar } from "@stagewise/toolbar-next";
import { ReactPlugin } from "@stagewise-plugins/react";
import BackgroundEffect from "./components/BackgroundEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JuJ Hub - 软件下载中心",
  description: "一站式软件下载中心，精选常用软件，电脑开荒不愁",
  icons: {
    icon: [
      {
        url: "https://s21.ax1x.com/2025/06/19/pVVAWmn.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://s21.ax1x.com/2025/06/19/pVVAWmn.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://s21.ax1x.com/2025/06/19/pVVAWmn.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://at.alicdn.com" />
        <link 
          rel="stylesheet" 
          href="https://at.alicdn.com/t/c/font_4461036_y8j2vqyxhb.css" 
          media="print" 
          id="aliicon-stylesheet"
        />
        <link rel="icon" href="https://s21.ax1x.com/2025/06/19/pVVAWmn.png" />
        <link rel="preload" as="image" href="https://s21.ax1x.com/2025/06/19/pVVAWmn.png" />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const stylesheet = document.getElementById('aliicon-stylesheet');
                if (stylesheet) {
                  stylesheet.onload = function() {
                    this.media = 'all';
                  };
                }
              });
            `
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-gray-900 text-gray-100 min-h-screen`}
      >
        <BackgroundEffect />
        <Navbar />
        <div className="pt-20">
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
          </main>
        </div>
        <Footer />
        <BackToTop />
        <StagewiseToolbar
          config={{
            plugins: [ReactPlugin],
          }}
        />
      </body>
    </html>
  );
}
