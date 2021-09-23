import RoutingPaths from "../../routes/RoutingPaths"
import { useHistory } from "react-router"
import { useState, useEffect } from "react"
import { fetchDogDataFromApi } from "../../shared/api/FetchDogApi";
import spinner from "../../shared/images/spinner.gif";

export const Home = () => {
    const history = useHistory();
    const [apiData, setApiData] = useState("none");
    const [apiDataArr, setApiDataArr] = useState([]);
    const [loading, setLoading] = useState(true);
    
    
    const fetchDog = async () => {
        const dogData = await fetchDogDataFromApi();
        setApiData(dogData);
    }

    const fetchManyDogs = async () => {
        const dogoArr = [];
        for(let i = 0; i < 10; i++) {
            dogoArr[i] = await fetchDogDataFromApi();
        }
        await setApiDataArr(dogoArr);
        setLoading(false);
    }
    
    const displayManyDogs = () => {
        if(loading) {
            return (
                <div>
                    <h1>loading dogos!</h1>
                    <img src={spinner} />
                </div>
            );
        } else {
            return apiDataArr?.map(dog => (
            <div>
                <img src={dog.data.message} />
            </div>
            ));
        }
    };
    
    useEffect(() => {
        fetchDog();
        fetchManyDogs();
    },[]);

    return (
        <div>
            <section>
                <h1>Home view (Dogo view)</h1>
                <br />
                <p>For sending values between views via the history object state variable go to Test View One -</p>
                <button onClick={() => history.push(RoutingPaths.testViewOne)}>Go to Test view One</button>
                <br />
                <br />
            </section>
            <section>
                <h3>Dog api below</h3>
                <button onClick={() => fetchDog()}>Fetch a new dog from api</button>
                <button onClick={() => fetchManyDogs()}>Or Fetch many new dogos</button>
                <br />
                <img src={apiData.data?.message} />
                {displayManyDogs()}
            </section>     
        </div>
    )
}
