import { BellRing, Check, Heading3 } from "lucide-react"

import { cn } from '../../lib/utils'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "../ui/card"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { Switch } from "../ui/switch"
import { Avatar, AvatarImage } from "../ui/avatar"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Progress } from "../ui/progress"

const Match = ({ className, ...props }) => {
	const { colors, count, notifications } = props
	const [mobileView, setMobileView] = useState(window.innerWidth < 768);

	const updateMedia = () => {
		setMobileView(window.innerWidth < 768);
	}

	useEffect(() => {
		window.addEventListener("resize", updateMedia);
		return () => window.removeEventListener("resize", updateMedia)
	}, []);

	return (
		<Card className={cn(
			"container lg:w-3/4",
			className
		)} {...props}>
			<CardHeader className="flex-col justify-center items-center gap-5 text-center md:text-left md:flex-row md:justify-between">
				<Avatar className="h-40 w-40">
					<AvatarImage src="https://i.scdn.co/image/ab6775700000ee8526b3955c69d8937e309bf24c" alt="Sazed's spotify profile" />
				</Avatar>
				{mobileView ? (
					<Separator />
				) : (
					<Separator orientation="vertical" className="h-40" />
				)}
				<div>
					<CardTitle className="text-2xl">
						Atharva Pardeshi
					</CardTitle>
					<CardDescription className="text-xl flex flex-col">
						<Link target="_blank" to='https://open.spotify.com/user/s8a89d3sodmvkeq1um4uz09f0'>@sazed</Link>
						<span>Tastes match: 95% 😉</span>
					</CardDescription>
				</div>
			</CardHeader>
			<Separator />
			<CardContent className="">
				<div className="flex flex-col md:flex-row gap-4 items-center mt-4">
					<div className="text-center md:text-left md:w-1/2">
						<h3 className="text-xl">Bio:</h3>
						<span>I'm going to sue spotify, because you're not listed as the hottest single</span>
					</div>
					<div className="w-max md:w-1/2 text-card-foreground px-12 py-4 md:p-4 md:py-2 border rounded-lg flex items-center gap-x-10">
						<Avatar className="h-16 w-16">
							<AvatarImage src="https://i.scdn.co/image/ab67616d00001e02fedd4473f36c9e6007dbf997" />
						</Avatar>
						<div className="flex flex-col gap-4">
							<div>
								<h3 className="text-xl">passing papers</h3>
								<span>by Egg</span>
							</div>
							<div>
								<Progress value={46} className="h-2" />
								<div className="text-xs flex justify-between items-center">
									<span>1:19</span>
									<span>2:52</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-row justify-between gap-4 mt-4">
					<div className="w-1/2">
						<h3 className="text-xl">Top Songs</h3>
						<ul className="border">
							<li></li>
							<li></li>
							<li></li>
						</ul>
					</div>
					<div className="w-1/2 border">
						<h3 className="text-xl">Top Artists</h3>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default Match
