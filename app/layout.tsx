import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "강민수 | 자기소개",
  description: "고려대학교 컴퓨터학과 강민수의 자기소개 페이지",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full bg-screen text-phosphor">{children}</body>
    </html>
  );
}
