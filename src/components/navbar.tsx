import React from "react"
import Link from "next/link"
import DiamondIcon from "@/components/diamond"

interface Props {}

const Navbar = (props: Props) => {
	return (
		<header className="px-4 lg:px-6 h-14 flex items-center">
			<Link className="flex items-center justify-center space-x-2" href="#">
				<DiamondIcon className="h-6 w-6 text-yellow-500" />
				<h5 className="font-semibold">Vegas</h5>
			</Link>

			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#">
					Games
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#">
					Promotions
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#">
					About
				</Link>
				<Link
					className="text-sm font-medium hover:underline underline-offset-4"
					href="#">
					Contact
				</Link>
			</nav>
		</header>
	)
}

export default Navbar
