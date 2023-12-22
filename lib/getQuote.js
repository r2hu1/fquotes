import axios from "axios";
const getQuote = async () => {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        return response;
    } catch (error) {
        return error;
    }
};

export default getQuote;