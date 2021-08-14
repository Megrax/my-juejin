import React from "react";
import { useLocation } from "react-router-dom";
import Item from "./components/Item";

interface nav {
	route: string;
	title: string;
}

function Nav() {
	const location = useLocation();
	const navs: nav[] = [
		{ route: "recommended", title: "推荐" },
		{ route: "backend", title: "后端" },
		{ route: "frontend", title: "前端" },
		{ route: "android", title: "Android" },
		{ route: "ios", title: "iOS" },
	];

	return (
		<nav className="flex flex-row items-center flex-none w-screen h-12 overflow-x-scroll no-scrollbar bg-white">
			{navs.map((n) => {
				return (
					<Item
						route={n.route}
						title={n.title}
						isActive={
							location.pathname ===
							`/${location.pathname.split("/")[1]}/${n.route}`
						}
						key={n.route}
					></Item>
				);
			})}
		</nav>
	);
}

export default Nav;
