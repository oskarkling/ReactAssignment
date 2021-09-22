import { useHistory } from "react-router"
import RoutingPaths from "../../../routes/RoutingPaths"
import "./DesktopNavigation.css"

export const DesktopNavigation = () => {
    const history = useHistory();
    return (
        <div className="navbar--desktop">
            <button onClick={() => history.push(RoutingPaths.homeView)}>Home View</button>
            <button onClick={() => history.push(RoutingPaths.aboutView)}>About View</button>
        </div>
    )
}