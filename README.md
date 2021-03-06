# project3

## installations

npm install --save react-router-dom@5 --save-exact

npm install --save react-transition-group

##### note mapblog/src/App.js

```
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
```
##### <Route> must be used inside of router

##### note mapblog/src/App.js
```
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
```
##### App function is run straight down. wrap route's w redirect in switch component to keep redirect from running

##### note ./src/user/components/UserItem
```
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
```
##### link component gives react router dom a chance to render a link so we dont have to reload the page when we follower a certain link. basically serves as an anchor tag that prevents the page from reloading

##### note ./src/shared/components/navigation/MainNavigation
```
import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import "./MainNavigation.css";

const MainNavigation = (props) => {
return (
<React.Fragment>
<SideDrawer>

<nav className="main-navigation__drawer-nav">
<NavLinks />
</nav>
</SideDrawer>
<MainHeader>
<button className="main-navigation__menu-btn">
<span />
<span />
<span />
</button>
<h1 className="main-navigation__title">
<Link to="/">Your Places</Link>
</h1>
<nav className="main-navigation__header-nav">
<NavLinks />
</nav>
</MainHeader>
</React.Fragment>
);
};

export default MainNavigation;
```
##### <React.Fragment> allows us to have two components with prop.children side by side



# Map Blog Project

#### mapblog/src/shared/components/navigation/NavLinks.js

``` <NavLink><NavLink/> ```

is imported from "react-router-dom" by NavLink

component utilizes props.children. it has a to prop which serves as the link rendered when the app is built. 

Only rendered if logged in 

- my places 
- add place 
- add journal entry 
- my journal entry
  
Rendered if not logged in 

- authenticate 
  
``` <NavLink to="/" exact> ```

the exact is import as we dont want the following links to default to that particular link


#### mapblog/src/shared/components/UIElements/Backdrop.js mapblog/src/shared/components/navigation/MainNavigation.js mapblog/src/shared/components/SideDrawer.js

SideDraw.js along with Backdrop.js use react portals from ReactDom to be rendered to the page. 

SideDrawer.js uses CSSTransition to create an instance of mounting the side draw or sliding it in and out

the SideDrawer component and MainHeader component are wrapped in React.Fragment

MainNavigation uses the useState hook to manipulate the side draw from open to close. 


