import type { Metadata } from 'next';
import { Work_Sans, Nunito_Sans, Inter, Roboto } from 'next/font/google';
import './styles/globals.css';
import './styles/reset.css';
import { ReactNode } from 'react';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-work-sans',
  display: 'swap',
});
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-nunito-sans',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-inter',
  display: 'swap',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agroton',
  description: 'Agro app for businesses and b2c',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${workSans.variable} ${nunitoSans.variable} ${inter.variable} ${roboto.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
