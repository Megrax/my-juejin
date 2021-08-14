import React from "react";
import { Link, useLocation } from "react-router-dom";

function Item(props: { route?: string; title: string; isActive: boolean }) {
	const { route, title, isActive } = props;
	const location = useLocation();

	return (
		<div
			className={`${
				isActive ? "active-sub-nav" : "inactive-sub-nav"
			} text-base font-normal leading-7 h-7 pl-3 pr-3 ml-2.5 mt-3 bg-white rounded-full`}
		>
			<Link
				to={`/${location.pathname.split("/")[1]}/${
					location.pathname.split("/")[2]
				}${route ? "/" + route : ""}`}
			>
				<p className="min-w-max text-center">{title}</p>
			</Link>
		</div>
	);
}

export default Item;
