import { useHistory } from "react-router"
import RoutingPaths from "../../routes/RoutingPaths";

export const NotFound = () => {
    const history = useHistory();
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <p>Woops, the link was wrong</p>
            <button onClick={() => history.push(RoutingPaths.homeView)}>Go home</button>
        </div>
    )
}
