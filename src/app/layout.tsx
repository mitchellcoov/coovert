import { Sacramento } from 'next/font/google'
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import "./globals.css";

const sacramento: NextFontWithVariable = Sacramento({
  weight: ['400'],
  style: 'normal',
  subsets: [],
  display: 'swap',
  variable: "--font-sacramento"
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sacramento.variable} antialiased`}
      >
        {children}
        <footer>
          <p className="p-6 mt-8">&copy; 2024 Mitchell Coovert. All rights reserved.</p>
        </footer>
      </body>

    </html>
  );
}
