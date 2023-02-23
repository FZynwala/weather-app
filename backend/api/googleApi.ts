import axios from 'axios';

export default axios.create({
    baseURL: 'https://maps.googleapos.com/maps/api/place/autocomplete/json',
});