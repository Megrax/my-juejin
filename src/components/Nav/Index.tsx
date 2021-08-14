import React from "react";
import { useLocation } from "react-router-dom";
import Item from "./components/Item";

function Nav(props: { categories: ICategory[] }) {
	const { categories } = props;
	const location = useLocation();

	return (
		<nav className="flex flex-row items-center flex-none w-screen h-12 overflow-x-scroll no-scrollbar bg-white">
			{categories.map((c) => {
				return (
					<Item
						route={c.category_route}
						title={c.category_name}
						isActive={
							location.pathname ===
							`/${location.pathname.split("/")[1]}/${c.category_route}`
						}
						key={c.category_id}
					></Item>
				);
			})}
		</nav>
	);
}

export default Nav;
