import NavBar from "@/_components/function/navbar";
import { Box, Container, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins } from "next/font/google";
import AuthProvider from "../_lib/auth/AuthProvider";
import ScrollArea from "@/_components/ui/scroll-area";

// CSS
import "@/_styles/theme.css"; // Radix theme import and config
import "@/_styles/globals.css";
import QueryClientProvider from "@/_lib/QueryClientProvider";

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
        <QueryClientProvider>
          <AuthProvider>
            <ThemeProvider attribute="class">
              <Theme accentColor="mint" grayColor="slate">
                <ScrollArea className="h-screen">
                  <Box className="bg-[var(--color-background)] z-10 fixed w-[calc(100%-0.4rem)] top-0 left-0 pl-[0.4rem]">
                    <Container className="px-5">
                      <Box className="h-20">
                        <NavBar />
                      </Box>
                    </Container>
                  </Box>
                  <Box className="relative top-20">
                    <Container className="px-5">
                      <main>{children}</main>
                    </Container>
                  </Box>
                </ScrollArea>
                {/* <ThemePanel /> */}
              </Theme>
            </ThemeProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
