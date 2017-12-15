import axios from 'axios';
const apiURL = `http://localhost:3005`;

export function getBooksList() {
  console.log(apiURL);
  return axios.get(`${apiURL}/api/books/`).then( res => res.data );
}

export function getBook(id) {
  return axios.get(`${apiURL}/api/book/${id}`).then( res => res.data );  
}

export function addBook(book) {
  console.log('OVO JE TVOJ OBJEKT: ', book);
  return axios.post(`${apiURL}/api/book/`, book)
    .then( res => console.log('Evo druze: ', res.data) )
    .catch(console.log);
}