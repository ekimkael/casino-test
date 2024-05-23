import type { Metadata } from "next"
import { Gabarito } from "next/font/google"
import { Outfit } from "next/font/google"

import "./globals.css"
import Navbar from "@/components/navbar"

const gabarito = Gabarito({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-gabarito",
})
const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
})

export const metadata: Metadata = {
	title: "Vegas",
	description: "Elevate Your Gambling Experience",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={gabarito.variable + " " + outfit.variable}>
				<div className="flex flex-col min-h-[100dvh]">
					<Navbar />

					{children}
				</div>
			</body>
		</html>
	)
}
