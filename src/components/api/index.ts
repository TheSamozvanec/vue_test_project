import axios from "axios";

export const $api = axios.create({
  baseURL:'https://jsonplaceholder.typicode.com',
  timeout:5000,
  withCredentials:true,
  headers: {
    'X-Custom-Header':'foobar',
    Authorization: 'Bearer fgdhalfkkkkkvmsrepose;4po',
  },
});
