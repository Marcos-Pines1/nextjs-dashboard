import { Noto_Sans_Display } from "next/font/google";
import "./global.css";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto.className} antialiased`}>{children}</body>
    </html>
  );
}
