"use client"

import React from "react"
import WheelComponent from "./packages/wheel"

interface Props {}

const FortuneWheel = (props: Props) => {
	const segments = [
		"better luck next time",
		"won 70",
		"won 10",
		"better luck next time",
		"won 2",
		"won uber pass",
		"better luck next time",
		"won a voucher",
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
	const onFinished = (winner: string) => {
		console.log(winner)
	}

	return (
		<WheelComponent
			segments={segments}
			segColors={segColors}
			winningSegment=""
			onFinished={(winner) => onFinished(winner)}
			isOnlyOnce={false}
			size={240}
		/>
	)
}

export default FortuneWheel
