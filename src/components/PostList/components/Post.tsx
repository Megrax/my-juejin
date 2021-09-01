import React from "react";
import { useHistory } from "react-router-dom";
import moment from "../../../utils/moment";
import ThumbUp from "../../../icons/ThumbUp";
import Comment from "../../../icons/Comment";
import Tag from "./Tag";

function Post(props: {
	article_id: string;
	articleInfo: IArticleInfo;
	authorInfo: IAuthorUserInfo;
	categoryInfo: ICategoryInfo;
}) {
	const { article_id, articleInfo, authorInfo, categoryInfo } = props;
	const history = useHistory();

	const handlePostClick = () => {
		history.push(`/post/${article_id}`);
	};

	return (
		<div className="w-screen bg-white mt-4 p-4 pb-4" onClick={handlePostClick}>
			<h2 className="w-full text-lg font-bold mb-1">{articleInfo?.title}</h2>
			<div className="flex flex-row justify-start w-full text-gray-400">
				<span>{authorInfo?.user_name}</span>
				<span className="ml-2 mr-2 text-gray-300">|</span>
				<span>{moment(moment.unix(+articleInfo?.mtime)).fromNow()}</span>
			</div>
			<div className="flex flex-row w-full">
				<p className="w-64 h-14 tow-line-ellipsis pt-1 pr-1">
					{articleInfo?.brief_content}
				</p>
				<div className="w-24 bg-gray-200">
					<img
						src={articleInfo?.cover_image}
						alt={articleInfo?.title}
						className="h-full"
					/>
				</div>
			</div>
			<div className="flex flex-row items-center mt-3 text-gray-400">
				<div className="flex flex-row">
					<ThumbUp size={5}></ThumbUp>
					<span className="ml-1">{articleInfo?.digg_count}</span>
				</div>
				<div className="flex flex-row items-center ml-12 text-gray-400">
					<Comment size={5}></Comment>
					<span className="ml-1">{articleInfo?.comment_count}</span>
				</div>
				<div className="flex-grow"></div>
				<Tag category={categoryInfo?.second_category_name}></Tag>
			</div>
		</div>
	);
}

export default Post;
