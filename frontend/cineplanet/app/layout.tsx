import NavBar from "@/app/_components/function/navbar";
import { Container, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";

// CSS
import "./globals.css";
import "./theme.css"; // Radix theme import and config

export const metadata: Metadata = {
  title: "CinePlanet",
  description: "Your go to friend for movie booking.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <Theme accentColor="mint" grayColor="slate">
            <Container className="px-5">
              <NavBar />
              <main>{children}</main>
            </Container>
            {/* <ThemePanel /> */}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
