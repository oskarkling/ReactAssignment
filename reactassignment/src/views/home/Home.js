import RoutingPaths from "../../routes/RoutingPaths"
import { useHistory } from "react-router"
import { useState, useEffect, useContext } from "react"
import { fetchDogDataFromApi } from "../../shared/api/FetchDogApi";
import spinner from "../../shared/images/spinner.gif";
import { DogeContext } from "../../shared/providers/DogeProvider";

export const Home = () => {
    const history = useHistory();
    const [apiData, setApiData] = useState("none");
    const [dogeData, setDogeData] = useContext(DogeContext);
    const [loading, setLoading] = useState(true);
    const [loadingOneDog, setLoadingOneDog] = useState(true);
    const [nrOfDogos, setNrOfDogos] = useState();
    const [placeHolderText, setPlaceHolderText] = useState("insert how many dogos");
    const [notANumber, setNotANumber] = useState(false);
    
    const fetchDog = async () => {
        const dogData = await fetchDogDataFromApi();
        setApiData(dogData);
        setLoadingOneDog(false);
    }

    const fetchManyDogs = async (dogos) => {
        const dogoArr = [];
        for(let i = 0; i < dogos; i++) {
            dogoArr[i] = await fetchDogDataFromApi();
        }
        await setDogeData(dogoArr);
        setNrOfDogos(dogos);
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
            return dogeData?.map(dog => (
                <img src={dog.data.message} height="200" />
            ));
        }
    };

        const displayOneDog = () => {
        if(loadingOneDog) {
            return (
                <div>
                    <h1>loading dogos!</h1>
                    <img src={spinner} />
                </div>
            );
        } else {
            return (
            <div>
                <img src={apiData.data?.message}  height="200" />
            </div>
            );
        }
    };

    const checkIfNr = (input) => {
        if(!isNaN(input))
        {
            setLoading(true);
            fetchManyDogs(input);
            setNrOfDogos(input);
            setNotANumber(false);

        } else {
            setNotANumber(true);
        }
    }

    const notANumberInput = () => {
        if(notANumber)
        return (
            <p>please enter a number</p>
        )
    }
    
    useEffect(() => {
        fetchDog();
        fetchManyDogs(2);
    },[]);

    return (
        <div className="middle">
            
                <h1>Home view</h1>
                <br />
                <p>For sending values between views via the history object state variable go to Test View One -</p>
                <button onClick={() => history.push(RoutingPaths.testViewOne)}>Go to Test view One</button>
                <br />
                <br />


                <h3>Dog api below</h3>
                <button onClick={() => fetchDog()}>Fetch a new dog from api</button>
                <br />
                {displayOneDog()}
                <p>Enter number of dogos to show:</p>
                <input placeholder={placeHolderText} onChange={(event) => checkIfNr(event.target.value)} />
                {notANumberInput()}
                <p>Showing {nrOfDogos} Dogos!</p>
                <div>
                    {displayManyDogs()}
                </div>
    
        </div>
    )
}
