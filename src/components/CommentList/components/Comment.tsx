import React from "react";
import moment from "../../../utils/moment";
import { computeJobTitle } from "../../../utils";
import ThumbUp from "../../../icons/ThumbUp";
import CommentIcon from "../../../icons/Comment";

export default function Comment(props: { comment: IComment }) {
	const { comment } = props;

	return (
		<div className="flex flex-row pt-3">
			<div className="flex flex-row justify-center items-start w-14">
				<div className="w-8 h-8 rounded-full overflow-hidden">
					<img
						src={comment.user_info.avatar_large}
						alt={comment.user_info.user_name}
					/>
				</div>
			</div>
			<div className="flex flex-col text-sm">
				{/* user info line */}
				<div className="flex flex-row mb-3">
					<div className="font-semibold max-w-28 truncate border-r pr-3">
						{comment.user_info.user_name}
					</div>
					{computeJobTitle(comment.user_info).hasTitle ? (
						<div className="max-w-32 truncate border-r text-center text-gray-400 pl-3 pr-3">
							{computeJobTitle(comment.user_info).title}
						</div>
					) : null}
					<div className="pl-3 text-gray-400">
						{moment(moment.unix(+comment.comment_info.ctime)).fromNow()}
					</div>
				</div>
				{/* comment content */}
				<div className="max-w-xs mb-3">
					{comment.comment_info.comment_content}
				</div>
				{/* likes and replies */}
				<div className="flex flex-row text-xs text-gray-400 mb-3">
					<div className="flex flex-row items-center">
						<ThumbUp size={4}></ThumbUp>
						<div className="ml-1">
							{comment.comment_info.digg_count || "点赞"}
						</div>
					</div>
					<div className="flex flex-row items-center ml-3">
						<CommentIcon size={4}></CommentIcon>{" "}
						<div className="ml-1">
							{comment.comment_info.reply_count || "回复"}
						</div>
					</div>
				</div>
				{/* reply */}
				{comment.reply_infos.map((reply) => (
					<div className="flex flex-row pt-3" key={reply.reply_id.toString()}>
						<div className="flex flex-row justify-center items-start w-14">
							<div className="w-8 h-8 rounded-full overflow-hidden">
								<img
									src={reply.user_info.avatar_large}
									alt={reply.user_info.user_name}
								/>
							</div>
						</div>
						<div className="flex flex-col text-sm">
							{/* user info line */}
							<div className="flex flex-row mb-3">
								<div className="font-semibold max-w-28 truncate border-r pr-3">
									{reply.user_info.user_name}
								</div>
								{computeJobTitle(reply.user_info).hasTitle ? (
									<div className="max-w-32 truncate border-r text-center text-gray-400 pl-3 pr-3">
										{computeJobTitle(reply.user_info).title}
									</div>
								) : null}
								<div className="pl-3 text-gray-400">
									{moment(moment.unix(+reply.reply_info.ctime)).fromNow()}
								</div>
							</div>
							{/* comment content */}
							<div className="max-w-xs mb-3">
								{reply.reply_info.reply_content}
							</div>
							{/* likes and replies */}
							<div className="flex flex-row text-xs text-gray-400 mb-3">
								<div className="flex flex-row items-center">
									<ThumbUp size={4}></ThumbUp>
									<div className="ml-1">
										{reply.reply_info.digg_count || "点赞"}
									</div>
								</div>
								<div className="flex flex-row items-center ml-3">
									<CommentIcon size={4}></CommentIcon>{" "}
									<div className="ml-1">回复</div>
								</div>
							</div>
						</div>
					</div>
				))}
				{/* reply */}
			</div>
		</div>
	);
}
