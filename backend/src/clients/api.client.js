import axios from 'axios';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const clientUrl = 'https://api.com.mock';
const API_KEY = process.env.API_KEY;
console.log('process.env.API_KEY', process.env.API_KEY)
exports.getInfo = () => {
    const params = {
        start_time: '2019-03-19T00:00:00Z',
        end_time: '2019-03-19T23:59:59Z',
        lat: '44.2691622567',
        lon: '-71.3020887916',
        fields: 'Rain Quantity'    
    }

    return axios.get(
            `${clientUrl}/v3/weather/historical/`, {
                params,
                headers: {
                    'apikey': API_KEY,
                    'Accept': 'application/JSON',
                    'crossDomain': true,
                }
            })
        .then(res => res.data)
        .catch(err => {
            console.log('api error... ', err.response.data);

        });
}