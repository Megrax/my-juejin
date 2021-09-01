export const computeJobTitle = (
	useInfo: IAuthorUserInfo | undefined
): { hasTitle: boolean; title: string } => {
	let hasTitle: boolean = useInfo?.job_title ? true : false;
	let hasCompany: boolean = useInfo?.company ? true : false;

	switch (`${hasTitle} ${hasCompany}`) {
		case "true true":
			return {
				hasTitle: true,
				title: `${useInfo?.job_title} @ ${useInfo?.company}`,
			};
		case "true false":
			return {
				hasTitle: true,
				title: `${useInfo?.job_title}`,
			};
		case "false true":
			return {
				hasTitle: true,
				title: `${useInfo?.company}`,
			};
		case "false false":
			return {
				hasTitle: false,
				title: " ",
			};
		default:
			return {
				hasTitle: false,
				title: " ",
			};
	}
};

export const findCategoryIdByRoute = (
	route: string,
	categories: ICategory[]
): number | undefined => {
	return categories.find((category) => category.category_route === route)
		?.category_id;
};

export const findSubCategoryIdByRoute = (
	cate: string,
	route: string,
	categories: ICategory[]
): number | undefined => {
	return categories
		.find((category) => category.category_route === cate)
		?.children?.find((child) => child.category_route === route)?.category_id;
};
