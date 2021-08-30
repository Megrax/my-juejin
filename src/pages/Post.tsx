import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// @ts-ignore
import { getArticleById } from "../../fake-api";
import ArrowLeft from "../icons/ArrowLeft";
import DotsHorizontal from "../icons/DotsHorizontal";
import Plus from "../icons/Plus";

function Post() {
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const [article, setArticle] = useState<IArticle>();

	useEffect(() => {
		(async () => {
			const res = await getArticleById(id);
			setArticle(res.data.article);
			console.log(res.data);
		})();
	}, []);

	const handleRouteBack = (): void => {
		history.goBack();
	};

	const computeJobTitle = (): string => {
		let hasTitle: boolean = article?.author_user_info?.job_title ? true : false;
		let hasCompany: boolean = article?.author_user_info?.company ? true : false;

		switch (`${hasTitle} ${hasCompany}`) {
			case "true true":
				return `${article?.author_user_info?.job_title} @ ${article?.author_user_info?.company}`;
			case "true false":
				return `${article?.author_user_info?.job_title}`;
			case "false true":
				return `${article?.author_user_info?.company}`;
			case "false false":
				return " ";
			default:
				return " ";
		}
	};

	return (
		<div className="w-screen relative">
			<header className="fixed z-10 top-0 w-full flex flex-row justify-around items-center h-16 shadow-lg bg-white">
				<div onClick={handleRouteBack}>
					<ArrowLeft></ArrowLeft>
				</div>
				<h1 className="w-64 truncate font-bold">
					{article?.article_info.title}
				</h1>
				<DotsHorizontal></DotsHorizontal>
			</header>
			<main className="w-full pt-16">
				<aside className="flex flex-row justify-between items-center h-16 pl-4 pr-4">
					<div className="flex flex-row items-center">
						<div className="w-10 h-10 rounded-full overflow-hidden">
							<img
								src={article?.author_user_info.avatar_large}
								alt={article?.author_user_info.user_name}
							/>
						</div>
						<div className="flex flex-col ml-2">
							<p>{article?.author_user_info.user_name}</p>
							<p className="w-48 truncate text-sm text-navGrey">
								{computeJobTitle()}
							</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center w-20 h-8 border rounded-sm border-followGreen text-followGreen">
						<Plus></Plus>关注
					</div>
				</aside>
				<section
					dangerouslySetInnerHTML={{ __html: article?.article_content || "" }}
					className="pl-6 pr-6"
				></section>
			</main>
			<footer className="w-full pb-6">
				<div className="flex flex-row justify-start items-center w-full h-10 text-gray-400">
					<div className="flex flex-row justify-center items-center h-8 ml-4 pl-2 pr-2 rounded-md bg-gray-200">
						{article?.category_info.first_category_name}
					</div>
					<div className="flex flex-row justify-center items-center h-8 ml-4 pl-2 pr-2 rounded-md bg-gray-200">
						{article?.category_info.second_category_name}
					</div>
				</div>
				<div className="mt-5 pl-4 text-gray-400">{`赞 ${article?.article_info.digg_count} · 阅读 ${article?.article_info.view_count}`}</div>
			</footer>
		</div>
	);
}

export default Post;
