import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,

            },
            headers: {
                'x-rapidapi-key': '68936c7fd2mshe32d08a6a408433p1b7485jsn2f7968ff24c7',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    }
    catch (error) {
        console.log(error)
    }
}