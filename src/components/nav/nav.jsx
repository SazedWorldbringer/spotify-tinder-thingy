import { Link, NavLink } from "react-router-dom";
import { navItems } from "./items";
import { Headphones } from "lucide-react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../ui/button";

function MainNav({ items }) {
	return (
		<div className="flex gap-6 md:gap-10">
			<Link to="/" className="hidden items-center space-x-2 md:flex">
				<Headphones />
				<span className="hidden font-bold sm:inline-block">Spotify Tinder Thingy</span>
			</Link>
			{items.length ? (
				<nav className="hidden gap-6 md:flex">
					{items.map((item, index) => (
						<NavLink
							key={index}
							to={item.disabled ? "#" : item.href}
							className={
								({ isActive }) => isActive
									? "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground"
									: "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60"
							}
						>
							{item.title}
						</NavLink>
					))}
				</nav>
			) : null}
		</div>
	)
}

export default function Nav() {
	return (
		<div className="flex h-20 items-center justify-between py-6">
			<MainNav items={navItems.mainNav} />
			<nav>
				<Link
					to="/login"
					className={cn(
						"px-4",
						buttonVariants({variant: "secondary"})
						)
					}
				>
					Login
				</Link>
			</nav>
		</div >

	)
}
