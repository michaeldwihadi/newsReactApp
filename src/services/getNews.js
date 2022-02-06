import axios from 'axios';

const NEWS_API_BASE_URL = process.env.REACT_APP_NEWS_API_BASE_URL
const NEWS_API_KEY = process.env.REACT_APP_API_KEY

export const getNews = async () => {
    try {
        const path = '/search',
            query = `?q=microsoft&lang=en&token=${NEWS_API_KEY}`,
            endpointURL = `${NEWS_API_BASE_URL}${path}${query}`,
            res = await axios.get(endpointURL);
        if(res.status === 200){
            const resData = {...res.data}
            return resData;
        }
    } catch (error) {
        console.error('Error getting Tech News: ', error)
    }
}