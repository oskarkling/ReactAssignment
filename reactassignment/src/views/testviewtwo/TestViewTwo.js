import RoutingPaths from "../../routes/RoutingPaths"
import { useHistory } from "react-router"
import { useState } from "react"
import { useLocation } from "react-router"

export const TestViewTwo = () => {
    const [val, setVal] = useState();
    const location = useLocation();
    const history = useHistory();

    return (
        <div className="middle">
            <h1>TEST VIEW TWO</h1>
            <h3>Value from test view one: </h3>
            <h1>{location.state}</h1>
            <p>value is sent via history object state variable</p>
            <button onClick={() => history.push(RoutingPaths.testViewOne)}>Go back to test view one</button>
        </div>
    )
}
