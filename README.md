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

##### note ./src/user/components/UserItem

import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

import "./UserItem.css";

const UserItem = (props) => {
return (
<li className="user-item">
<Card className="user-item__content">
<Link to={`/${props.id}/places`}>
<div className="user-item__image">
<Avatar image={props.image} alt={props.name} />
</div>
<div className="user-item__info">
<h2>{props.name}</h2>
<h3>
{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
</h3>
</div>
</Link>
</Card>
</li>
);
};

export default UserItem;

##### link component gives react router dom a chance to render a link so we dont have to reload the page when we follower a certain link. basically serves as an anchor tag that prevents the page from reloading
