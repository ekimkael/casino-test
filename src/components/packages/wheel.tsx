"use client"

import React, { useEffect, useState, useRef } from "react"

export interface WheelComponentProps {
	segments: string[]
	segColors: string[]
	winningSegment: string
	onFinished: (segment: string) => void
	primaryColor?: string
	contrastColor?: string
	buttonText?: string
	isOnlyOnce?: boolean
	size?: number
	upDuration?: number
	downDuration?: number
	fontFamily?: string
	fontSize?: string
	outlineWidth?: number
}

const WheelComponent = (props: WheelComponentProps) => {
	const {
		segments,
		segColors,
		winningSegment,
		onFinished,
		primaryColor = "black",
		contrastColor = "white",
		buttonText = "Spin",
		isOnlyOnce = true,
		size = window.innerWidth,
		upDuration = 100,
		downDuration = 1000,
		fontFamily = "Arial",
		fontSize = "1em",
		outlineWidth = 10,
	} = props

	/**
	 * Generates a random string of a specified length.
	 *
	 * The generated string consists of uppercase letters, lowercase letters,
	 * and digits. The default length of the generated string is 8 characters.
	 *
	 * @function
	 * @returns {string} A random string of 8 characters.
	 */
	const randomString = () => {
		const chars =
			"0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("")
		const length = 8
		let token = ""
		for (let i = 0; i < length; i++) {
			token += chars[Math.floor(Math.random() * chars.length)]
		}
		return token
	}

	const [isFinished, setFinished] = useState(false)
	const canvasId = useRef(`canvas-${randomString()}`)
	const wheelId = useRef(`wheel-${randomString()}`)
	const dimension = (size + 20) * 2
	let currentSegment = ""
	let isStarted = false
	let timerHandle = 0
	const timerDelay = segments.length
	let angleCurrent = 0
	let angleDelta = 0
	let canvasContext: CanvasRenderingContext2D | null = null
	let maxSpeed = Math.PI / segments.length
	const upTime = segments.length * upDuration
	const downTime = segments.length * downDuration
	let spinStart = 0
	let frames = 0
	const centerX = size + 20
	const centerY = size + 20

	useEffect(() => {
		wheelInit()
		setTimeout(() => {
			window.scrollTo(0, 1)
		}, 0)
	}, [])

	const wheelInit = () => {
		initCanvas()
		wheelDraw()
	}

	/**
	 * Initializes the canvas element for drawing.
	 *
	 * This function selects a canvas element based on the given `canvasId`.
	 * If the browser is Internet Explorer, it creates a new canvas element
	 * and appends it to the DOM. The function also sets up a click event
	 * listener on the canvas to trigger the `spin` function and gets the 2D
	 * rendering context for the canvas.
	 *
	 * @function
	 * @returns {void}
	 */
	const initCanvas = () => {
		let canvas: HTMLCanvasElement | null = document.getElementById(
			canvasId.current
		) as HTMLCanvasElement

		if (navigator.userAgent.indexOf("MSIE") !== -1) {
			canvas = document.createElement("canvas")
			canvas.setAttribute("width", `${dimension}`)
			canvas.setAttribute("height", `${dimension}`)
			canvas.setAttribute("id", canvasId.current)
			document.getElementById(wheelId.current)?.appendChild(canvas)
		}
		canvas?.addEventListener("click", spin, false)
		canvasContext = canvas?.getContext("2d")
	}

	/**
	 * Starts the spinning action.
	 *
	 * This function sets the `isStarted` flag to true and initializes the spin
	 * parameters if the spin is not already in progress. It records the start time,
	 * calculates the maximum speed based on the number of segments, resets the frame count,
	 * and sets an interval to call `onTimerTick` at a specified delay.
	 *
	 * @function
	 * @returns {void}
	 */
	const spin = () => {
		isStarted = true
		if (timerHandle === 0) {
			spinStart = new Date().getTime()
			maxSpeed = Math.PI / segments.length
			frames = 0
			timerHandle = window.setInterval(onTimerTick, timerDelay)
		}
	}

	/**
	 * Handles the timer tick for spinning the wheel.
	 *
	 * This function is called at regular intervals to update the spinning animation.
	 * It increments the frame count, draws the current state, calculates the spin progress,
	 * and updates the angular delta for the spin. It also checks if the spin has finished
	 * and handles the end of the spin accordingly.
	 *
	 * @function
	 * @returns {void}
	 */
	const onTimerTick = () => {
		frames++
		draw()
		const duration = new Date().getTime() - spinStart
		let progress = 0
		let finished = false
		if (duration < upTime) {
			progress = duration / upTime
			angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2)
		} else {
			if (winningSegment) {
				if (currentSegment === winningSegment && frames > segments.length) {
					progress = duration / upTime
					angleDelta =
						maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
					progress = 1
				} else {
					progress = duration / downTime
					angleDelta =
						maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
				}
			} else {
				progress = duration / downTime
				angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
			}
			if (progress >= 1) finished = true
		}

		angleCurrent += angleDelta
		while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2
		if (finished) {
			setFinished(true)
			onFinished(currentSegment)
			clearInterval(timerHandle)
			timerHandle = 0
			angleDelta = 0
		}
	}

	const wheelDraw = () => {
		clear()
		drawWheel()
		drawNeedle()
	}

	const draw = () => {
		clear()
		drawWheel()
		drawNeedle()
	}

	/**
	 * Draws a segment of the spinning wheel.
	 *
	 * This function draws a segment of the wheel on the canvas, including the arc,
	 * fill color, and label. It uses the segment's key to determine the color and label,
	 * and the angles to define the start and end of the arc.
	 *
	 * @function
	 * @param {number} key - The index of the segment in the `segments` array.
	 * @param {number} lastAngle - The starting angle of the segment.
	 * @param {number} angle - The ending angle of the segment.
	 * @returns {boolean} Returns false if the canvas context is not available.
	 */
	const drawSegment = (key: number, lastAngle: number, angle: number) => {
		if (!canvasContext) {
			return false
		}
		const ctx = canvasContext
		const value = segments[key]
		ctx.save()
		ctx.beginPath()
		ctx.moveTo(centerX, centerY)
		ctx.arc(centerX, centerY, size, lastAngle, angle, false)
		ctx.lineTo(centerX, centerY)
		ctx.closePath()
		ctx.fillStyle = segColors[key % segColors.length]
		ctx.fill()
		ctx.stroke()
		ctx.save()
		ctx.translate(centerX, centerY)
		ctx.rotate((lastAngle + angle) / 2)
		ctx.fillStyle = contrastColor
		ctx.font = `bold ${fontSize} ${fontFamily}`
		ctx.fillText(value.substring(0, 21), size / 2 + 20, 0)
		ctx.restore()
	}

	/**
	 * Draws the entire spinning wheel on the canvas.
	 *
	 * This function iterates through all segments of the wheel and draws each segment.
	 * It also draws the center circle and the outer circle of the wheel.
	 *
	 * @function
	 * @returns {boolean} Returns false if the canvas context is not available.
	 */
	const drawWheel = () => {
		if (!canvasContext) {
			return false
		}
		const ctx = canvasContext
		let lastAngle = angleCurrent
		const len = segments.length
		const PI2 = Math.PI * 2
		ctx.lineWidth = 1
		ctx.strokeStyle = primaryColor
		ctx.textBaseline = "middle"
		ctx.textAlign = "center"
		ctx.font = "1em " + fontFamily
		for (let i = 1; i <= len; i++) {
			const angle = PI2 * (i / len) + angleCurrent
			drawSegment(i - 1, lastAngle, angle)
			lastAngle = angle
		}

		// Draw a center circle
		ctx.beginPath()
		ctx.arc(centerX, centerY, 50, 0, PI2, false)
		ctx.closePath()
		ctx.fillStyle = primaryColor
		ctx.lineWidth = 10
		ctx.strokeStyle = contrastColor
		ctx.fill()
		ctx.font = "bold 1em " + fontFamily
		ctx.fillStyle = contrastColor
		ctx.textAlign = "center"
		ctx.fillText(buttonText, centerX, centerY + 3)
		ctx.stroke()

		// Draw outer circle
		ctx.beginPath()
		ctx.arc(centerX, centerY, size, 0, PI2, false)
		ctx.closePath()

		ctx.lineWidth = outlineWidth
		ctx.strokeStyle = primaryColor
		ctx.stroke()
	}

	/**
	 * Draws the needle on the canvas.
	 *
	 * This function draws a needle at the top of the wheel, indicating the currently selected segment.
	 * It also displays the name of the current segment below the wheel if the spin has started.
	 *
	 * @function
	 * @returns {boolean} Returns false if the canvas context is not available.
	 */
	const drawNeedle = () => {
		if (!canvasContext) {
			return false
		}
		const ctx = canvasContext
		ctx.lineWidth = 1
		ctx.strokeStyle = contrastColor
		ctx.fillStyle = contrastColor
		ctx.beginPath()
		ctx.moveTo(centerX + 20, centerY - 50)
		ctx.lineTo(centerX - 20, centerY - 50)
		ctx.lineTo(centerX, centerY - 70)
		ctx.closePath()
		ctx.fill()
		const change = angleCurrent + Math.PI / 2
		let i =
			segments.length -
			Math.floor((change / (Math.PI * 2)) * segments.length) -
			1
		if (i < 0) i = i + segments.length
		ctx.textAlign = "center"
		ctx.textBaseline = "middle"
		ctx.fillStyle = primaryColor
		ctx.font = "bold 1.5em " + fontFamily
		currentSegment = segments[i]
		isStarted && ctx.fillText(currentSegment, centerX + 10, centerY + size + 50)
	}

	/**
	 * Clears the canvas.
	 *
	 * This function clears the entire canvas, removing any drawings or content
	 * that was previously rendered.
	 *
	 * @function
	 * @returns {boolean} Returns false if the canvas context is not available.
	 */
	const clear = () => {
		if (!canvasContext) {
			return false
		}
		const ctx = canvasContext
		ctx.clearRect(0, 0, dimension, dimension)
	}

	// ====================COMPONENT====================

	return (
		<div id={wheelId.current}>
			<canvas
				className="w-full md:w-auto"
				id={canvasId.current}
				width={dimension}
				height={dimension}
				style={{
					pointerEvents: isFinished && isOnlyOnce ? "none" : "auto",
				}}
			/>
		</div>
	)
}
export default WheelComponent
