import React from "react";
import { useRouteMatch } from "react-router-dom";
import Tab from "../components/Tab";

function Home(props: { type?: string }) {
	const { type } = props;
	const { url } = useRouteMatch();

	return (
		<main className="flex flex-col h-screen">
			<div className="flex-grow w-screen">{url}</div>
			<Tab></Tab>
		</main>
	);
}

Home.defaultProps = {
	type: "hot",
};

export default Home;
