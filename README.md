# project3

## installations

npm install --save react-router-dom@5 --save-exact

# note mapblog/src/App.js

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
