import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Item(props: { route: string; title: string; isActive: boolean }) {
	const { route, title, isActive } = props;
	const { url } = useRouteMatch();

	return (
		<div
			className={`${isActive ? "text-theme" : "text-gray-500"} pl-2 pr-2 ml-3`}
		>
			<Link to={`${url}/${route}`}>
				<p className="min-w-max text-center">{title}</p>
			</Link>
		</div>
	);
}

export default Item;
