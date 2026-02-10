import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "PropTech Helpdesk",
  description: "Smart helpdesk for property management",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
