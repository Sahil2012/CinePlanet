import NavBar from "@/_components/function/navbar";
import { Box, Container, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";

// CSS
import "@/_styles/globals.css";
import "@/_styles/theme.css"; // Radix theme import and config
import AuthProvider from "../_lib/auth/AuthProvider";

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
        <AuthProvider>
          <ThemeProvider attribute="class">
            <Theme accentColor="mint" grayColor="slate">
              <Container className="px-5">
                <Box className="h-screen flex flex-col">
                  <NavBar />
                  <main className="h-1 flex-grow">{children}</main>
                </Box>
              </Container>
              {/* <ThemePanel /> */}
            </Theme>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
