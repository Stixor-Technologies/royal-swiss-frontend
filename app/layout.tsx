import type { Metadata } from "next";
import { Inter, Righteous } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import PageLoader from "@/components/page-loader";

const inter = Inter({ subsets: ["latin"] });

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});

export const metadata: Metadata = {
  title: "RoyalSwissHousing | Pakistan",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${righteous.variable} ${inter.className}`}>
        <Header />
        <PageLoader />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="min-h-screen overflow-x-hidden bg-milk-white pt-[7.313rem] sm:pt-[9.375rem] lg:pt-[11.562rem]">
              <div className="bg-[url('/images/bg-assets/bg-main-mobile.png')] bg-contain bg-[right_top_-26vw] bg-no-repeat sm:bg-[right_top_-18vw] md:bg-[url('/images/bg-assets/bg-main.png')] md:bg-[center_top_-8vw]">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
