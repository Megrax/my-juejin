import React from "react";
import { useRouteMatch } from "react-router-dom";
import Item from "./components/Item";

interface tab {
	route: string;
	title: string;
}

function Tab() {
	const { path } = useRouteMatch();
	const tabs: tab[] = [
		{ route: "hot", title: "热门" },
		{ route: "newest", title: "最新" },
		{ route: "history", title: "历史" },
	];

	return (
		<section className="flex flex-row items-center flex-none w-screen h-14 shadow-2xl">
			{tabs.map((t) => {
				return (
					<Item
						route={t.route}
						isActive={`/${t.route}` === path}
						title={t.title}
						key={t.title}
					></Item>
				);
			})}
		</section>
	);
}

export default Tab;
