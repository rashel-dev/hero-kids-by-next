import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "400", "500", "600", "800"],
    variable: "--font-poppins",
});

export const fontBangla = localFont({
    src: [
        {
            path: "../../public/fonts/mayaboti-normal.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/mayaboti-Italic.ttf",
            weight: "400",
            style: "italic",
        },
    ],
});

export const metadata = {
    title: "Hero Kidzz",
    description: "By Mohammad Rashel",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.className} antialiased`}>
                <header className="py-2 w-11/12 mx-auto">
                    <Navbar />
                </header>
                <main className="w-11/12 mx-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
