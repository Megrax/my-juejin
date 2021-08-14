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
