import React, { useState, useEffect } from "react";
import {
	useRouteMatch,
	useLocation,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import Nav from "../components/Nav";
import SubNav from "../components/SubNav";
import PostList from "../components/PostList";
import Tab from "../components/Tab";

// @ts-ignore
import { getCategories } from "../../fake-api";

function Home(props: { type?: string }) {
	const { type } = props;
	const { path } = useRouteMatch();
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

	// get categories
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
				<Switch>
					<Route exact path={`/${type}`}>
						<Redirect to={`/${type}/recommended`} />
					</Route>
					{categories.map((category) => {
						return (
							<Route
								exact
								path={`${path}/${category.category_route}`}
								key={category.category_id}
							>
								<PostList
									type={type}
									categoryRoute={category.category_route}
									isSubCategory={false}
									categories={categories}
								></PostList>
							</Route>
						);
					})}
					{categories.map(
						(category) =>
							category?.children &&
							category?.children.map((child) => {
								return (
									<Route
										key={`${category.category_id}${child.category_id}`}
										exact
										path={`${path}/${category.category_route}/${child.category_route}`}
									>
										<PostList
											type={type}
											categoryRoute={child.category_route}
											isSubCategory
											optionalRoute={category.category_route}
											categories={categories}
										></PostList>
									</Route>
								);
							})
					)}
				</Switch>
			</div>
			<Tab></Tab>
		</main>
	);
}

Home.defaultProps = {
	type: "hot",
};

export default Home;
