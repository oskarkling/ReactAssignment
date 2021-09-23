import RoutingPaths from "../../routes/RoutingPaths"
import { useHistory } from "react-router"
import { useState, useContext } from "react";
import { DogeContext } from "../../shared/providers/DogeProvider";

export const TestViewOne = () => {
    const history = useHistory();
    const [val, setVal] = useState();
    const [dogeData, setDogeData] = useContext(DogeContext);

    const displayManyDogs = () => {
        return dogeData?.map(dog => (
        <div>
            <img src={dog.data.message} />
        </div>
        ));
    };

    return (
        <div>
            <h1>TEST VIEW ONE</h1>
            <input placeholder="insert value here" onChange={(event) => setVal(event.target.value)} />
            <button onClick={() => history.push(RoutingPaths.testViewTwo, val)}>send value to Test view two</button>
            <br/>
            <br/>
            <button onClick={() => history.push(RoutingPaths.homeView)}>Go back to home view</button>
            <br />
            <p>Some doges below from DogeContext. Fetched from the home view</p>
            {displayManyDogs()}
        </div>
    )
}
