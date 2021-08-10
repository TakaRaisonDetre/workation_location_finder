import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
var options = {
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',

    },
    headers: {
        'x-rapidapi-key': '68936c7fd2mshe32d08a6a408433p1b7485jsn2f7968ff24c7',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
    }
};


export const getPlacesData = async () => {
    try {
        const { data: { data } } = await axios.get(URL, options);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}