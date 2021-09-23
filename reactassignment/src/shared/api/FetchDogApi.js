import axios from "axios";

export const fetchDogDataFromApi = async () => {
    try {
        return await axios.get('https://dog.ceo/api/breeds/image/random');
    }
    catch (err) {
        return console.log(err);
    }
}
