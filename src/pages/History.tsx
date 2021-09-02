import React from "react";
import HistoryList from "../components/PostList/HistoryList";
import Tab from "../components/Tab/Index";
import DotsHorizontal from "../icons/DotsHorizontal";

export default function History(props: {
	readPosts: any[] | Set<IArticle>;
	setReadPosts: React.Dispatch<any>;
}) {
	const { readPosts, setReadPosts } = props;

	const clearHistory = (): void => {
		setReadPosts(new Set());
		localStorage.removeItem("history");
	};

	return (
		<main className="flex flex-col h-screen w-screen relative">
			<header className="fixed z-10 top-0 w-full flex flex-row justify-between items-center h-16 shadow-lg bg-white">
				<div onClick={clearHistory}>
					<div className="flex flex-row items-center justify-center w-14 h-8 ml-4 border rounded-sm border-red-400 text-red-400">
						清空
					</div>
				</div>
				<h1 className="font-bold">浏览历史</h1>
				<div className="w-14">
					<DotsHorizontal></DotsHorizontal>
				</div>
			</header>
			<div className="flex-grow w-screen bg-bgGrey overflow-y-auto">
				<HistoryList readPosts={readPosts ? readPosts : []}></HistoryList>
			</div>
			<Tab />
		</main>
	);
}
