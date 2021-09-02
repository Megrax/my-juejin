import React, { useState, useEffect, useRef } from "react";
import _ from "lodash";
import Post from "./components/Post";

export default function HistoryList(props: {
	readPosts: any[] | Set<IArticle>;
}) {
	const { readPosts } = props;

	return (
		<div className=" pt-16">
			{_.uniqWith([...readPosts].filter((item) => item).reverse(), _.isEqual)
			.map((a) => {
				if (a) {
					return (
						<Post
							article_id={a.article_id}
							articleInfo={a.article_info}
							authorInfo={a.author_user_info}
							categoryInfo={a.category_info}
							key={`${a.article_id}${a.category_info.second_category_id}`}
						></Post>
					);
				}
			})}
			<div>
				<div className="flex flex-row justify-center text-gray-400 border-t border-gray-200 mt-4 pt-2 pb-2">
					已经到底啦~
				</div>
			</div>
		</div>
	);
}
