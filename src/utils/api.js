import axios from 'axios'
const api = axios.create({
  baseURL: 'https://www.superheroapi.com/api.php/2634491169970691', 
  headers: {'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            }
});
export default api;

