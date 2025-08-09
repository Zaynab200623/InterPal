import "./globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/ui/header";
import { dark } from "@clerk/themes";
import Link from "next/link";
import { Toaster } from "sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "InterPal - Your Career Guide",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${poppins.className} relative h-full w-full bg-slate-950`}>
                
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
          
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative z-10">
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />
              <footer className="flex items-center bg-muted/10 justify-center w-full h-24 border-t">
                <div className="container mx-auto justify-center flex items-center gap-2">
                  <p>
                    Made with ❤️ by{" "}
                    <Link href="https://github.com/Vanshbhattok">@VanshBhatt</Link>
                  </p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
