import React, { useState, useEffect, useRef } from "react";
import Comment from "./components/Comment";
// @ts-ignore
import { getCommentsByArticleId } from "../../../fake-api";

export default function CommentList(prop: { articleId: string }) {
	const { articleId } = prop;

	const [comments, setComments] = useState<IComment[]>([]);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const endRef = useRef<HTMLDivElement>(null);
	const limit: number = 10;
	let screenCount: number = 0;
	let offset: number = 0;

	useEffect(() => {
		(async () => {
			const res = await getCommentsByArticleId(articleId);
			setComments(res.data.comments);
			setHasMore(res.has_more);
		})();
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				//fetch new comments here
				screenCount++;
				offset = screenCount * limit;
				(async () => {
					const res = await getCommentsByArticleId(articleId, offset, limit);
					setComments((comments) => [...comments, ...res.data.comments]);
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
			{comments.map((comment) => {
				return <Comment comment={comment} key={comment.comment_id} />;
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
