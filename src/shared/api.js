const fetch = require("isomorphic-fetch");

const apiUrl = "http://localhost:3000/api";


const fetchCard = (id) => {
  console.log('api#7->>> fetchCard called');
  return fetch(`${apiUrl}/card/${id}`)
    .then(data => {
      return data.json();
    })
    .then(data => console.log(data) || data)
    .catch((error) => {
      console.warn(error)
      return null
    });
}

module.exports = {
  fetchCard
}