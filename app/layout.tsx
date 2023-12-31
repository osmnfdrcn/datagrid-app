import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal"],
  weight: "400",
});

export const metadata = {
  title: "Rast Mobile",
  description: "Geleceği inşa ediyoruz.",
};
import { StateProvider } from "@/providers/stateProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <StateProvider>
          <div className="mt-[80px] lg:mt-[100px] px-[5%] ">{children}</div>
        </StateProvider>
      </body>
    </html>
  );
}
