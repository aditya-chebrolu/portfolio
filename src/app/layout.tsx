import { Inter, Source_Sans_3 } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@providers/theme-provider";
import ToggleThemeButton from "@/components/toggle-theme-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter"
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sans"
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${sourceSans.variable} no-scrollbar flex min-h-screen flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <ToggleThemeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
