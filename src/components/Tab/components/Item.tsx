import React from 'react';

function Item(props: {
	title: string;
	index: number;
	isActive: boolean;
	setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
	return (
		<div
			className={`${props.isActive ? 'text-blue-500' : 'text-gray-500'} flex-1`}
			onClick={() => {
				props.setTabIndex(props.index);
			}}
		>
			<p className="text-center">{props.title}</p>
		</div>
	);
}

export default Item;
