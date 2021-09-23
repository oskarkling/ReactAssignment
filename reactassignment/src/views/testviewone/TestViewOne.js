import RoutingPaths from "../../routes/RoutingPaths"
import { useHistory } from "react-router"
import { useState } from "react";


export const TestViewOne = () => {
    const history = useHistory();
    const [val, setVal] = useState();


    return (
        <div>
            <h1>TEST VIEW ONE</h1>
            <input placeholder="insert value here" onChange={(event) => setVal(event.target.value)} />
            <button onClick={() => history.push(RoutingPaths.testViewTwo, val)}>send value to Test view two</button>
            <br/>
            <br/>
            <button onClick={() => history.push(RoutingPaths.homeView)}>Go back to home view (dogo view)</button>
        </div>
    )
}
