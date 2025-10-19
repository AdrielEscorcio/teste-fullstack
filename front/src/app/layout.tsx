import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu";
import Logo from "@/components/logo";

export const metadata: Metadata = {
  title: "Sistema de Gestão",
  description: "Criado por Adriel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body >
        <header>
              <Logo />
            <nav>
              <Menu />
            </nav>
        </header>
        <main >
          {children}
        </main>
      </body>
    </html>
  );
}
