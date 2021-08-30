import React, { useState, useEffect, useRef } from "react";
import Post from "./components/Post";
// @ts-ignore
import { getArticles } from "../../../fake-api";

function PostList() {
	const limit: number = 10;
	const [articles, setArticles] = useState<IArticle[]>([]);
	const endRef = useRef<HTMLDivElement>(null);
	let screenCount: number = 0;
	let offset: number = 0;

	useEffect(() => {
		(async () => {
			const res = await getArticles();
			setArticles(res.data.articles);
			console.log(res.data);
		})();
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				//fetch new posts here
				screenCount++;
				offset = screenCount * limit;
				(async () => {
					const res = await getArticles(0, "hot", offset, limit);
					setArticles((articles) => [...articles, ...res.data.articles]);
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
						key={a.article_id}
					></Post>
				);
			})}
			<div className="flex flex-row justify-center text-gray-400" ref={endRef}>
				加载中...
			</div>
		</div>
	);
}

export default PostList;
