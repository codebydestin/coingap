import axios from 'axios';


export default axios.create({
    baseURL: 'https://min-api.cryptocompare.com/data',
    headers: {
        Authorization: 'e960488f8861b2db965866d4715cc91bdbde532729a4909477603c9414b96f69',
    },
});


