import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import { ThemeProvider } from "next-themes";

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
            {children}
            <ThemePanel />
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
