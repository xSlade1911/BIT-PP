import axios from 'axios';

export const get = (url) => {

    return axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'B1tD3V'
            }
        }
        )
        .then(response => {
            return response.data;
        })
}

