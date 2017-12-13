import axios from 'axios';
const apiURL = `http://localhost:3005`;

export function getBooksList() {
  console.log(apiURL);
  return axios.get(`${apiURL}/api/books/`).then( res => res.data );
}

export function getBook(id) {
  return axios.get(`${apiURL}/api/book/${id}`).then( res => res.data );  
}