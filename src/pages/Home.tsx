import React, { useState, useEffect } from "react";
import { useRouteMatch, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Index";
import SubNav from "../components/SubNav/Index";
import PostList from "../components/PostList";
import Tab from "../components/Tab/Index";
// @ts-ignore
import { getCategories } from "../../fake-api";

function Home(props: { type?: string }) {
	const { type } = props;
	const { url } = useRouteMatch();
	const location = useLocation();
	const [categories, setCategories] = useState<ICategory[]>([]);
	const currNav = location.pathname.split("/");
	currNav.shift();
	let nav;

	if (currNav.length === 1) {
		nav = null;
	} else if (currNav.length > 1) {
		let [match] = categories.filter(
			(category) => category.category_route === currNav[1]
		);
		if (match?.children) {
			nav = <SubNav subCategories={match.children}></SubNav>;
		}
	}

	useEffect(() => {
		(async () => {
			const res = await getCategories();
			setCategories(res.data.categories);
		})();
	});

	return (
		<main className="flex flex-col h-screen">
			<Nav categories={categories}></Nav>
			<div className="flex-grow w-screen bg-bgGrey overflow-y-auto">
				{nav}
				<PostList></PostList>
			</div>
			<Tab></Tab>
		</main>
	);
}

Home.defaultProps = {
	type: "hot",
};

export default Home;
