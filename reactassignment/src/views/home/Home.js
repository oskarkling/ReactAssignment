import RoutingPaths from "../../routes/RoutingPaths"
import { useHistory } from "react-router"
import { useState, useEffect } from "react"

export const Home = () => {
    const history = useHistory();

    return (
        <div>
            <h1>home view</h1>
            <br />
            
            <button onClick={() => history.push(RoutingPaths.testViewOne)}>Go to Test view One</button>
            <br />
            <button onClick={() => history.push(RoutingPaths.testViewTwo)}>Go to Test view Two</button>
            
        </div>
    )
}
