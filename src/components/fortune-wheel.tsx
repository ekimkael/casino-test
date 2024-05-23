"use client"

import React, { Fragment, useState } from "react"
import WheelComponent from "./packages/wheel"

import {
	Dialog,
	DialogTitle,
	DialogHeader,
	DialogContent,
	DialogDescription,
	DialogClose,
} from "@/components/ui/dialog"

interface Props {}

const FortuneWheel = (props: Props) => {
	const [show, setShow] = useState(false)
	const [price, setPrice] = useState<string | null>("")

	const segments = [
		"better luck next time",
		"won 75$",
		"won 100$",
		"better luck next time",
		"won 2$",
		"won 25$",
		"better luck next time",
		"won 1000$",
	]
	const segColors = [
		"#EE4040",
		"#F0CF50",
		"#815CD1",
		"#3DA5E0",
		"#34A24F",
		"#F9AA1F",
		"#EC3F3F",
		"#FF9000",
	]

	/**
	 * Handles the actions to perform when the spinning stops and the winner is determined.
	 *
	 * This function checks if the winner string matches a predetermined "not win" message.
	 * If it matches, it sets the prize to null. Otherwise, it extracts the prize amount
	 * from the winner string and sets it as the prize. It then displays the result.
	 *
	 * @function
	 * @param {string} winner - The string representing the winning segment.
	 * @returns {void}
	 */
	const onFinished = (winner: string) => {
		const notWin = "better luck next time"

		if (winner === notWin) {
			setPrice(null)
		} else {
			const amount = winner.split(" ")[1]
			setPrice(amount)
		}

		setShow(true)
	}

	/**
	 * Handles the click event on the "Try Again" or equivalent button.
	 *
	 * This function hides the result display if the current `price` is not a string.
	 *
	 * @function
	 * @returns {void}
	 */
	const handleClick = () => {
		if (typeof price !== "string") {
			setShow(false)
		}
	}

	// ====================COMPONENT====================

	return (
		<Fragment>
			<WheelComponent
				segments={segments}
				segColors={segColors}
				winningSegment=""
				onFinished={(winner) => onFinished(winner)}
				isOnlyOnce={false}
				size={240}
			/>

			<Dialog open={show} onOpenChange={setShow}>
				<DialogContent>
					<DialogDescription className="text-center text-3xl md:text-5xl font-bold tracking-tighter">
						{typeof price === "string"
							? `You won ${price} and a bonus of 2 free spins`
							: `Unfortunately you didn't won this time.`}
					</DialogDescription>

					<button className="button-87" onClick={handleClick}>
						{typeof price === "string"
							? `Withdraw your ${price}`
							: "Close and try again"}
					</button>
				</DialogContent>
			</Dialog>
		</Fragment>
	)
}

export default FortuneWheel
