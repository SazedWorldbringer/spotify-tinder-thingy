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

const songs = [
	{
		title: "Ki",
		artist: "C418",
		img: "https://i.scdn.co/image/ab67616d00001e024cf0b29eb06a92aa96acae64"
	},
	{
		title: "All your'n",
		artist: "tyler childers",
		img: "https://i.scdn.co/image/ab67616d00001e02d41fec800fa501c5bc623083"
	},
	{
		title: "She Wants Me (To Be Loved)",
		artist: "The Happy Fits",
		img: "https://i.scdn.co/image/ab67616d00001e0245d5bfb580bbb7598ac74360"
	},
	{
		title: "Toothpaste Kisses",
		artist: "The Maccabees",
		img: "https://i.scdn.co/image/ab67616d00001e027ccdcc0e2bc8f1646e28301f"
	},
	{
		title: "Would You Be So Kind",
		artist: "dodie",
		img: "https://i.scdn.co/image/ab67616d00001e0209815974458b8b0535b23a7d"
	}
]

const artists = [
	{
		name: "C418",
		genres: ["pixel"],
		img: "https://i.scdn.co/image/ab67616100005174a9b8234e3071836212561d19",
		url: "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
	},
	{
		name: "AJR",
		genres: ["pov: indie"],
		img: "https://i.scdn.co/image/ab67616100005174d0f8fb5691ea660889d10eb1",
		url: "https://open.spotify.com/artist/6s22t5Y3prQHyaHWUN1R1C",
	},
	{
		name: "The Beatles",
		genres: ["beatlesque", "british invasion", "classic rock", "merseybeat", "psychedelic rock", "rock"],
		img: "https://i.scdn.co/image/ab67616100005174e9348cc01ff5d55971b22433",
		url: "https://open.spotify.com/artist/3WrFJ7ztbogyGnTHbHJFl2",
	},
	{
		name: "Vaundy",
		genres: ["j-pop", "japanese soul"],
		img: "https://i.scdn.co/image/ab67616100005174104822dfaac494e992c7e3f6",
		url: "https://open.spotify.com/artist/2IUl3m1H1EQ7QfNbNWvgru",
	},
	{
		name: "dodie",
		genres: ["alt z", "indie pop", "pov: indie"],
		img: "https://i.scdn.co/image/ab67616100005174716f61b47a89c749e686ce3a",
		url: "https://open.spotify.com/artist/21TinSsF5ytwsfdyz5VSVS",
	}
]

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
			"container md:w-5/6 lg:w-3/4 backdrop-blur-sm bg-card/30",
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
					<div className="w-max md:w-1/2 text-card-foreground p-4 md:p-4 md:py-2 border rounded-lg flex justify-between items-center gap-x-10">
						<Avatar className="h-16 w-16">
							<AvatarImage src="https://i.scdn.co/image/ab67616d00001e02fedd4473f36c9e6007dbf997" />
						</Avatar>
						<div className="w-full flex flex-col gap-3">
							<div className="flex flex-row justify-between items-center">
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

				<div className="flex flex-col md:flex-row justify-between gap-4 mt-4">
					<div className="w-full md:w-1/2">
						<h3 className="text-xl text-center md:text-left">Top Songs</h3>
						<ul>
							{songs.map((song, idx) => (
								<li key={idx}>
									<Song title={song.title} artist={song.artist} img={song.img} />
									<Separator className="w-3/4 mx-auto" />
								</li>
							))}
						</ul>
					</div>

					<div className="w-full md:w-1/2">
						<h3 className="text-xl text-center md:text-left">Top Artists</h3>
						<ul>
							{artists.map((artist, idx) => (
								<li key={idx}>
									<Artist name={artist.name} genres={artist.genres} img={artist.img} url={artist.url} />
									<Separator className="w-3/4 mx-auto" />
								</li>
							))}
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

const Song = ({ title, artist, img }) => {
	return (
		<div className="w-full text-card-foreground px-12 py-4 md:p-4 md:py-2 flex items-center gap-x-5">
			<Avatar className="h-10 w-10">
				<AvatarImage src={img} />
			</Avatar>
			<div className="w-full overflow-auto">
				<div className="w-max">
					<h3>{title}</h3>
					<span className="text-sm">by {artist}</span>
				</div>
			</div>
		</div>
	)
}

const Artist = ({ name, genres, img, url }) => {
	return (
		<Link target="_blank" to={url}>
			<div className="w-full text-card-foreground px-12 py-4 md:p-4 md:py-2 flex items-center gap-x-5">
				<Avatar className="h-10 w-10">
					<AvatarImage src={img} />
				</Avatar>
				<div className="overflow-auto">
					<div className="w-max">
						<h3>{name}</h3>
						<span className="text-sm">
							{genres.join(", ")}
						</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Match
