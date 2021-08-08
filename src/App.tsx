import React, { useState } from 'react';
import Tab from './components/Tab';

function App() {
	const [tabIndex, setTabIndex] = useState<number>(0);

	return (
		<div className="flex flex-col h-screen">
			<div className="flex-grow w-screen">{tabIndex}</div>
			<Tab tabIndex={tabIndex} setTabIndex={setTabIndex}></Tab>
		</div>
	);
}

export default App;
