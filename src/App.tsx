import React, { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import _ from "lodash";
import Home from "./pages/Home";
import Post from "./pages/Post";
import History from "./pages/History";
import NotFound from "./pages/404";

function App() {
	const [readPosts, setReadPosts] = useState<any>(new Set());

	useEffect(() => {
		let his = localStorage.getItem("history");
		if (his) {
			setReadPosts(new Set(JSON.parse(his)));
		}
		return storeHistory;
	}, []);

	window.onbeforeunload = function () {
		storeHistory();
	};

	const storeHistory = () => {
		let set2Arr = _.uniqWith(
			[...readPosts].filter((item) => item).reverse(),
			_.isEqual
		);
		localStorage.setItem("history", JSON.stringify(set2Arr.reverse()));
	};

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Redirect to="/hot/recommended" />
				</Route>
				<Route path="/hot">
					<Home type="hot" />
				</Route>
				<Route path="/newest">
					<Home type="newest" />
				</Route>
				<Route path="/history">
					<History readPosts={readPosts} setReadPosts={setReadPosts} />
				</Route>
				<Route path="/post/:id">
					<Post readPosts={readPosts} setReadPosts={setReadPosts} />
				</Route>
				<Route path="/404">
					<NotFound></NotFound>
				</Route>
				<Route path="*">
					<Redirect to="/hot/recommended" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
