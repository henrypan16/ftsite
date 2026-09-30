import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Fillware Technologies",
	description: "Pharmacy & Point of Sale Management System",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-sans",
				inter.variable,
			)}>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"></meta>
			<body
				className="
      mx-auto flex min-h-screen flex-col
      w-[92%] pt-4
      sm:w-[90%] sm:pt-6
      md:w-5/6 md:pt-8
      lg:w-4/5 lg:pt-10
      xl:w-5/6 xl:pt-12
	  2xl:w-2/3 2xl:pt-12
      bg-[url('/bg.svg')]
      bg-cover bg-center bg-fixed bg-no-repeat
    ">
				<Navbar />

				<PageTransition>{children}</PageTransition>

				<Footer />
			</body>
		</html>
	);
}
