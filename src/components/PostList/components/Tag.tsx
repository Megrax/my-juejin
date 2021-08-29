import React from "react";

function Tag(props: { category: string }) {
	const { category } = props;
	return <div className="pl-2 pr-2 bg-gray-100 rounded-full">{category}</div>;
}

export default Tag;
