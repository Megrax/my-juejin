import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import Post from "./components/Post";
import { findCategoryIdByRoute, findSubCategoryIdByRoute } from "../../utils";
// @ts-ignore
import { getArticles } from "../../../fake-api";

function PostList(props: {
	type?: string;
	categoryRoute: string;
	isSubCategory: boolean;
	optionalRoute?: string;
	categories: ICategory[];
}) {
	const { type, categoryRoute, isSubCategory, optionalRoute, categories } =
		props;
	const limit: number = 10;
	const [articles, setArticles] = useState<IArticle[]>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const endRef = useRef<HTMLDivElement>(null);
	const history = useHistory();
	let screenCount: number = 0;
	let offset: number = 0;
	let category =
		isSubCategory && optionalRoute
			? findSubCategoryIdByRoute(optionalRoute, categoryRoute, categories)
			: findCategoryIdByRoute(categoryRoute, categories);

	useEffect(() => {
		(async () => {
			const res = await getArticles(category, type === "hot" ? type : "new");
			console.log(res.code);
			if (res.code === 0) {
				setArticles(res.data.articles);
				setHasMore(res.has_more);
			} else {
				history.push("/404");
			}
		})();
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				//fetch new posts here
				screenCount++;
				offset = screenCount * limit;
				(async () => {
					const res = await getArticles(
						category,
						type === "hot" ? type : "new",
						offset,
						limit
					);
					setArticles((articles) => [...articles, ...res.data.articles]);
					setHasMore(res.has_more);
				})();
			}
		});
		if (endRef.current) {
			observer.observe(endRef.current);
		}
	}, [endRef]);

	return (
		<div>
			{articles.map((a) => {
				return (
					<Post
						article_id={a.article_id}
						articleInfo={a.article_info}
						authorInfo={a.author_user_info}
						categoryInfo={a.category_info}
						key={`${a.article_id}${a.category_info.second_category_id}`}
					></Post>
				);
			})}
			<div>
				{hasMore ? (
					<div
						className="flex flex-row justify-center text-gray-400 pb-2"
						ref={endRef}
					>
						加载中...
					</div>
				) : (
					<div
						className="flex flex-row justify-center text-gray-400 border-t border-gray-200 mt-4 pt-2 pb-2"
						ref={endRef}
					>
						已经到底啦~
					</div>
				)}
			</div>
		</div>
	);
}

export default PostList;
