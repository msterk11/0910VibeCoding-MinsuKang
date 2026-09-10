import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "강민수 — the one-page issue",
  description:
    "고려대학교 컴퓨터학과 강민수. 한 페이지짜리 잡지 형식의 자기소개.",
};

const fontHref =
  "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;0,6..96,900;1,6..96,400&family=Archivo:wght@400;500;600;700&family=Gowun+Batang:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href={fontHref} rel="stylesheet" />
        {children}
      </body>
    </html>
  );
}
