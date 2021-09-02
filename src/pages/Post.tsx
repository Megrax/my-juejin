import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import _ from "lodash";
// @ts-ignore
import { getArticleById } from "../../fake-api";
import { computeJobTitle } from "../utils";
import ArrowLeft from "../icons/ArrowLeft";
import DotsHorizontal from "../icons/DotsHorizontal";
import Plus from "../icons/Plus";
import CommentList from "../components/CommentList";
import Loading from "../icons/Loading";

interface IRes {
	code: number;
	data: {
		article: IArticle;
	};
}

function Post(props: { readPosts: any; setReadPosts: React.Dispatch<any> }) {
	const { readPosts, setReadPosts } = props;
	const { id } = useParams<{ id: string }>();
	const history = useHistory();
	const [article, setArticle] = useState<IArticle>();
	const [imgLoading, setImgLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			const res: IRes = await getArticleById(id);
			if (res.code === 0) {
				setArticle(res.data.article);
				setReadPosts(
					new Set(
						_.uniqWith(
							[...readPosts, res.data.article].filter((item) => item).reverse(),
							_.isEqual
						).reverse()
					)
				);
			} else if (res.code === 404) {
				history.push("/404");
			}
		})();
	}, []);

	const handleRouteBack = (): void => {
		history.goBack();
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
								{computeJobTitle(article?.author_user_info).title}
							</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center w-20 h-8 border rounded-sm border-followGreen text-followGreen">
						<Plus></Plus>关注
					</div>
				</aside>
				{article?.article_info.cover_image ? (
					<div className="w-4/5 m-auto mt-2 mb-2">
						<img
							className={`${imgLoading ? "hidden" : ""}`}
							src={article?.article_info.cover_image}
							alt={article?.article_info.cover_image}
							onLoad={() => {
								setImgLoading(false);
							}}
						/>
						<Loading isLoading={imgLoading}></Loading>
					</div>
				) : null}
				<section
					dangerouslySetInnerHTML={{ __html: article?.article_content || "" }}
					className="pl-6 pr-6"
				></section>
			</main>
			<footer className="w-full pb-6 text-sm">
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
			<CommentList articleId={id}></CommentList>
		</div>
	);
}

export default Post;
