import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Отследить посылку — трекинг отправлений",
  description:
    "Узнайте, где находится ваша посылка прямо сейчас. Поддержка 1000+ служб доставки по всему миру",
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
