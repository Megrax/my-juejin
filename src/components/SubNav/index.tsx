import React from "react";
import Item from "./components/Item";

function SubNav(props: { subCategories: ISubCategory[] }) {
	const { subCategories } = props;

	return (
		<nav className="flex flex-row flex-wrap justify-start items-center w-screen pl-2 pr-2">
			<Item
				title="首页"
				isActive={location.pathname.split("/").length === 3}
			></Item>
			{subCategories.map((sc) => {
				return (
					<Item
						key={sc.category_id}
						route={sc.category_route}
						title={sc.category_name}
						isActive={
							location.pathname ===
							`/${location.pathname.split("/")[1]}/${
								location.pathname.split("/")[2]
							}/${sc.category_route}`
						}
					></Item>
				);
			})}
		</nav>
	);
}

export default SubNav;
