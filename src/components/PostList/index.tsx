import React, { useState, useEffect } from "react";
import Post from "./components/Post";
// @ts-ignore
import { getArticles } from "../../../fake-api";

function PostList() {
	const [articles, setArticles] = useState<IArticle[]>([]);

	useEffect(() => {
		(async () => {
			const res = await getArticles();
			setArticles(res.data.articles);
			console.log(res.data);
		})();
	}, []);

	return (
		<div>
			{articles.map((a) => {
				return (
					<Post
						articleInfo={a.article_info}
						authorInfo={a.author_user_info}
						categoryInfo={a.category_info}
						key={a.article_id}
					></Post>
				);
			})}
		</div>
	);
}

export default PostList;
