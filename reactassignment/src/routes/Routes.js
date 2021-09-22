import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import RoutingPaths from "./RoutingPaths"
import { Home } from "../views/home/Home"
import { About } from "../views/about/About"
import { NotFound } from "../components/404/NotFound"
import { TestViewOne } from "../views/testviewone/TestViewOne"
import { TestViewTwo } from "../views/testviewtwo/TestViewTwo"

export const Routes = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPaths.homeView} component={Home} />
                <Route exact path={RoutingPaths.aboutView} component={About} />
                <Route exact path={RoutingPaths.testViewOne} component={TestViewOne} />
                <Route exact path={RoutingPaths.testViewTwo} component={TestViewTwo} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}
