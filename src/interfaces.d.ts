interface ISubCategory {
	category_id: number;
	category_name: string;
	category_route: string;
}

interface ICategory {
	category_id: number;
	category_name: string;
	category_route: string;
	children?: ISubCategory[];
}

interface IArticleInfo {
	article_id: string;
	audit_status: number;
	brief_content: string;
	category_id: string;
	collect_count: number;
	comment_count: number;
	content: string;
	cover_image: string;
	ctime: string;
	digg_count: number;
	draft_id: string;
	hot_index: number;
	is_english: number;
	is_gfw: number;
	is_hot: number;
	is_original: number;
	link_url: string;
	mark_content: string;
	mtime: string;
	original_author: string;
	original_type: number;
	rank_index: number;
	rtime: string;
	status: number;
	tag_ids: number[];
	title: string;
	user_id: string;
	user_index: number;
	verify_status: number;
	view_count: number;
	visible_level: number;
}

interface IAuthorUserInfo {
	annual_list_type: number;
	avatar_large: string;
	company: string;
	description: string;
	digg_article_count: number;
	digg_shortmsg_count: number;
	extraMap: object;
	favorable_author: number;
	followee_count: number;
	follower_count: number;
	got_digg_count: number;
	got_view_count: number;
	identity: number;
	is_logout: number;
	is_select_annual: boolean;
	isfollowed: boolean;
	job_title: string;
	level: number;
	major: {
		major_id: string;
		name: string;
		parent_id: string;
	};
	post_article_count: number;
	post_shortmsg_count: number;
	power: number;
	select_annual_rank: number;
	select_event_count: number;
	select_online_course_count: number;
	student_status: number;
	study_point: number;
	university: {
		university_id: string;
		name: string;
		logo: string;
	};
	user_id: string;
	user_name: string;
}

interface ICategoryInfo {
	first_category_id: number;
	first_category_name: string;
	second_category_id: number;
	second_category_name: string;
}

interface IArticle {
	article_content: string;
	article_id: string;
	article_info: IArticleInfo;
	author_user_info: IAuthorUserInfo;
	category_info: ICategoryInfo;
}

interface IComment {
	comment_id: string;
	comment_info: ICommentInfo;
	reply_infos: IReplyInfo[];
	user_info: IAuthorUserInfo;
}

interface ICommentInfo {
	bury_count: number;
	comment_content: string;
	comment_id: string;
	comment_pics: Array<any>;
	comment_replys: ICommentReply[];
	comment_status: number;
	ctime: number;
	digg_count: number;
	is_bury: boolean;
	is_digg: boolean;
	item_id: string;
	item_type: number;
	level: number;
	reply_count: number;
	user_id: string;
}

interface ICommentReply {
	burry_count: number;
	ctime: number;
	digg_count: number;
	item_id: string;
	item_type: number;
	reply_comment_id: string;
	reply_content: string;
	reply_id: string;
	reply_pics: Array<any>;
	reply_status: number;
	reply_to_reply_id: string;
	reply_to_user_id: string;
	user_id: string;
}

interface IReplyInfo {
	reply_id: BigInt;
	reply_info: ICommentReply;
	user_info: IAuthorUserInfo;
}
