import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans, Open_Sans, Work_Sans } from 'next/font/google';

const workSans = Nunito_Sans({ subsets: ['latin'], variable: '--global-font-body' })

export const metadata: Metadata = {
  title: "Max",
  description: "O melhor serviço de streaming de filmes e séries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={workSans.className}
      >
        {children}
      </body>
    </html>
  );
}
