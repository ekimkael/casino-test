"use client"

/**
 *
 * by ekimkael.
 * @see https://github.com/ekimkael/vegas
 *
 */

import Link from "next/link"
import dynamic from "next/dynamic"
const FortuneWheel = dynamic(() => import("@/components/fortune-wheel"), {
	ssr: false,
})
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export default function Home() {
	return (
		<main className="flex-1">
			<section className="w-full py-12 md:py-12">
				{/* bg-[url('/left.png')] bg-no-repeat bg-left-top */}
				<div className="container px-4 md:px-6 lg:bg-[url('/left.png')] lg:bg-no-repeat lg:bg-left-top">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
						<div className="flex flex-col justify-end space-y-4 py-12">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
									Elevate Your Gambling Experience
								</h1>
								<p className="max-w-[600px] text-muted-foreground md:text-xl dark:text-gray-400">
									Discover a world of thrilling casino games, lucrative bonuses,
									and unparalleled excitement at Luxe Casino.
								</p>
							</div>
							<div className="flex flex-col gap-2 min-[400px]:flex-row">
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md bg-yellow-500 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
									href="#">
									Join Now
								</Link>
								<Link
									className="inline-flex h-10 items-center justify-center rounded-md border border-gray-600 border-gray-600 bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-600 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-700 disabled:pointer-events-none disabled:opacity-50"
									href="#">
									Explore Games
								</Link>
							</div>
						</div>

						<div className="">
							<FortuneWheel />
							{/* <picture>
								<img
									alt="Casino Hero"
									className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
									height={650}
									src="/placeholder.svg"
									width={650}
								/>
							</picture>
							<div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/90 to-transparent" /> */}
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-[#1e1e1e]">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-gray-950">
								Featured Games
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
								Explore Our Thrilling Casino Games
							</h2>
							<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								{`From classic slots to cutting-edge table games, our casino
									offers a diverse selection of thrilling experiences to satisfy
									every player's preference.`}
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
						<div className="relative overflow-hidden rounded-xl">
							<img
								alt="Game 1"
								className="mx-auto aspect-video object-cover object-center sm:w-full"
								height={310}
								src="/placeholder.svg"
								width={550}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/90 to-transparent flex items-end p-4">
								<div className="space-y-1">
									<h3 className="text-xl font-bold text-gray-50">Blackjack</h3>
									<p className="text-gray-300">
										Experience the thrill of classic casino gameplay.
									</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl">
							<img
								alt="Game 2"
								className="mx-auto aspect-video object-cover object-center sm:w-full"
								height={310}
								src="/placeholder.svg"
								width={550}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/90 to-transparent flex items-end p-4">
								<div className="space-y-1">
									<h3 className="text-xl font-bold text-gray-50">Roulette</h3>
									<p className="text-gray-300">
										Spin the wheel and test your luck at this iconic game.
									</p>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl">
							<img
								alt="Game 3"
								className="mx-auto aspect-video object-cover object-center sm:w-full"
								height={310}
								src="/placeholder.svg"
								width={550}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e]/90 to-transparent flex items-end p-4">
								<div className="space-y-1">
									<h3 className="text-xl font-bold text-gray-50">Slots</h3>
									<p className="text-gray-300">
										Spin the reels and chase the big jackpot.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-[#1e1e1e]">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-gray-950">
								Bonuses & Promotions
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
								Unlock Exclusive Rewards
							</h2>
							<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Take advantage of our generous bonuses and promotions to boost
								your bankroll and maximize your casino experience.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
						<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#1e1e1e] p-6">
							<div className="space-y-2">
								<h3 className="text-xl font-bold text-gray-50">
									Welcome Bonus
								</h3>
								<p className="text-gray-300">
									Claim a 100% match bonus up to $1,000 on your first deposit.
								</p>
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
									href="#">
									Claim Now
								</Link>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#1e1e1e] p-6">
							<div className="space-y-2">
								<h3 className="text-xl font-bold text-gray-50">Reload Bonus</h3>
								<p className="text-gray-300">
									Get a 50% match bonus up to $500 on every subsequent deposit.
								</p>
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
									href="#">
									Claim Now
								</Link>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#1e1e1e] p-6">
							<div className="space-y-2">
								<h3 className="text-xl font-bold text-gray-50">
									Loyalty Program
								</h3>
								<p className="text-gray-300">
									Earn points with every wager and climb the VIP tiers for
									exclusive rewards.
								</p>
								<Link
									className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-yellow-700 disabled:pointer-events-none disabled:opacity-50"
									href="#">
									Join Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32 bg-[#1e1e1e]">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-yellow-500 px-3 py-1 text-sm text-gray-950">
								Testimonials
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-50">
								What Our Players Say
							</h2>
							<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
								Hear from our satisfied customers and discover why Luxe Casino
								is the premier destination for online gambling.
							</p>
						</div>
					</div>
					<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
						<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#1e1e1e] p-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<p className="text-lg font-semibold leading-snug text-gray-50">
										“Luxe Casino has completely transformed my online gambling
										experience. The games are thrilling, the bonuses are
										generous, and the customer support is top-notch.”
									</p>
									<div className="flex items-center space-x-4">
										<Avatar>
											<AvatarImage src="/avatar-1.jpg" />
											<AvatarFallback>JD</AvatarFallback>
										</Avatar>
										<div>
											<div className="text-sm font-semibold text-gray-50">
												John Doe
											</div>
											<div className="text-sm text-gray-300">
												Professional Gambler
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#2c2c2c] to-[#1e1e1e] p-6">
							<div className="space-y-4">
								<div className="space-y-2">
									<p className="text-lg font-semibold leading-snug text-gray-50">
										{`“I've tried many online casinos, but Luxe Casino stands
											out with its exceptional game selection, user-friendly
											interface, and unbeatable promotions. It's my go-to
											destination for online gambling.”`}
									</p>
									<div className="flex items-center space-x-4">
										<Avatar>
											<AvatarImage src="/avatar-2.jpg" />
											<AvatarFallback>SM</AvatarFallback>
										</Avatar>
										<div>
											<div className="text-sm font-semibold text-gray-50">
												Sarah Miller
											</div>
											<div className="text-sm text-gray-300">
												Avid Casino Enthusiast
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
