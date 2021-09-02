import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "../../../utils/moment";
import ThumbUp from "../../../icons/ThumbUp";
import Comment from "../../../icons/Comment";
import Loading from "../../../icons/Loading";
import Tag from "./Tag";

function Post(props: {
	article_id: string;
	articleInfo: IArticleInfo;
	authorInfo: IAuthorUserInfo;
	categoryInfo: ICategoryInfo;
}) {
	const { article_id, articleInfo, authorInfo, categoryInfo } = props;
	const history = useHistory();
	const [imgLoading, setImgLoading] = useState<boolean>(true);

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
			<div className="flex flex-row justify-between w-full">
				<p
					className={`${
						articleInfo?.cover_image ? "w-4/5" : ""
					} h-14 tow-line-ellipsis pt-1 pr-1 `}
				>
					{articleInfo?.brief_content}
				</p>
				{articleInfo?.cover_image ? (
					<div className="flex-grow-0 w-2/5 h-14 break-words ">
						<img
							src={articleInfo?.cover_image}
							alt={articleInfo?.cover_image}
							className={`${
								imgLoading ? "hidden" : ""
							} float-left w-full h-14 object-cover`}
							onLoad={() => {
								setImgLoading(false);
							}}
						/>
						<Loading isLoading={imgLoading}></Loading>
					</div>
				) : null}
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
