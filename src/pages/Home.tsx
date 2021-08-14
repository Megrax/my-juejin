import React from "react";
import { useRouteMatch } from "react-router-dom";
import Nav from "../components/Nav/Index";
import SubNav from "../components/SubNav/Index";
import Tab from "../components/Tab/Index";

function Home(props: { type?: string }) {
	const { type } = props;
	const { url } = useRouteMatch();

	return (
		<main className="flex flex-col h-screen">
			<div className="flex-grow w-screen bg-bgGrey">
				<Nav></Nav>
				<SubNav></SubNav>
			</div>
			<Tab></Tab>
		</main>
	);
}

Home.defaultProps = {
	type: "hot",
};

export default Home;
