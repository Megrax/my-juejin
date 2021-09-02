import React from "react";
import { useHistory } from "react-router-dom";
import NotFoundImg from "../icons/404";

export default function NotFound() {
	const history = useHistory();

	const backHome = () => {
		history.push("/hot/recommended");
	};

	return (
		<div className="h-screen flex flex-col justify-around items-center">
			<div className="font-serif font-extralight text-xl">
				你来到了没有知识存在的荒野。
			</div>
			<NotFoundImg></NotFoundImg>
			<div
				className="flex flex-row items-center justify-center w-28 h-12 border rounded-sm text-lg border-theme text-theme"
				onClick={backHome}
			>
				回到首页
			</div>
		</div>
	);
}
