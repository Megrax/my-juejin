import React from 'react';
import Item from './components/Item';

function Tab(props: {
	tabIndex: number;
	setTabIndex: React.Dispatch<React.SetStateAction<number>>;
}) {
	const tabs: string[] = ['热门', '最新', '历史'];

	return (
		<section className="flex flex-row items-center flex-none w-screen h-16 shadow-2xl">
			{tabs.map((t, i) => {
				return (
					<Item
						isActive={t === tabs[props.tabIndex]}
						title={t}
						index={i}
						setTabIndex={props.setTabIndex}
						key={t}
					></Item>
				);
			})}
		</section>
	);
}

export default Tab;
