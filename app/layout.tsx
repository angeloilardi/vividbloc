import './globals.css'
import type { Metadata } from 'next'
import { Inter, Istok_Web, Poppins, Quantico } from 'next/font/google'

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
const istokWeb = Istok_Web({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--istok-font",
});
const quantico = Quantico({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--quantico-font",
});
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata: Metadata = {
  title: "Vividbloc.studio",
  description: "Where Your Story Takes Center Stage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${istokWeb.variable} ${quantico.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
