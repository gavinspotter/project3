# project3

## installations

npm install --save react-router-dom@5 --save-exact

##### note mapblog/src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Users from "./user/pages/Users";

const App = () => {
return (
<Router>
<Route path="/" exact>
<Users />
</Route>
<Redirect to="/" />
</Router>
);
};

export default App;

##### <Route> must be used inside of router

##### note mapblog/src/App.js

import React from "react";
import {
BrowserRouter as Router,
Route,
Redirect,
Switch,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
return (
<Router>
<Switch>
<Route path="/" exact>
<Users />
</Route>
<Route path="/places/new" exact>
<NewPlace />
</Route>
<Redirect to="/" />
</Switch>
</Router>
);
};

export default App;

##### App function is run straight down. wrap route's w redirect in switch component to keep redirect from running
