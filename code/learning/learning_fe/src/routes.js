import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Error404 from "./components/pages/404";
import Register from "./components/pages/Register";
import Lessons from "./components/pages/Lessons";
import Classes from "./components/pages/Classes";


const BaseRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/lessons/:id" component={Lessons} />
            <Route exact path="/classes" component={Classes} />
            <Route component={Error404} />
        </Switch>
    </div>
);

export default BaseRouter;
