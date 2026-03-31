import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Александр Рыбалко | Фотограф и Видеооператор",
  description: "Портфолио фотографа и видеооператора. Футбольная съемка, прямые трансляции, спортивные мероприятия.",
  keywords: ["фотограф", "видеооператор", "футбол", "трансляции", "спорт", "Сочи"],
  authors: [{ name: "Александр Рыбалко" }],
  openGraph: {
    title: "Александр Рыбалко | Фотограф и Видеооператор",
    description: "Портфолио фотографа и видеооператора. Футбольная съемка, прямые трансляции.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
