//Sorting Defaut COnfiguration Setting for making HTTP Calls.
import axios, { CanceledError } from 'axios';

export default axios.create({
baseURL: 'https://jsonplaceholder.typicode.com',
// headers: {
// 'api-key':'...'
// }
})
/*
Can optionally set headers. THese haeaders will be passed with every HTTP Request.

Sometimes this is necessary some backends requires us
to send the API key in every HTTP Request.
*/
export { CanceledError }; //Exporting CanceledError as a named Object.