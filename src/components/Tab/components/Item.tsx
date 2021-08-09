import React from "react";
import { Link } from "react-router-dom";

function Item(props: { route: string; title: string; isActive: boolean }) {
	const { route, title, isActive } = props;

	return (
		<div className={`${isActive ? "text-theme" : "text-gray-500"} flex-1`}>
			<Link to={`/${route}`}>
				<p className="text-center">{title}</p>
			</Link>
		</div>
	);
}

export default Item;
