import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "400", "500", "600", "800"],
    variable: "--font-poppins",
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
                <footer className="py-2 w-11/12 mx-auto">
                    <Footer />
                </footer>
            </body>
        </html>
    );
}
