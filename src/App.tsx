import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/hot">
					<Home type="hot" />
				</Route>
				<Route path="/newest">
					<Home type="newest" />
				</Route>
				<Route path="/history">
					<Home type="history" />
				</Route>
				<Route path="/post/:id">
					<Post />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
