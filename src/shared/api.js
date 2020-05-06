import fetch from "isomorphic-fetch";

const apiUrl = "http://localhost:3000/api";


const fetchCardById = (id) => {
  return fetch(`${apiUrl}/card/${id}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => console.log(data) || data)
      .catch((error) => {
        console.warn(error);
        return null;
      });
};

const fetchCards = () => {
  return fetch(`${apiUrl}/cards`)
      .then((data) => {
        return data.json();
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
};

export {
  fetchCardById,
  fetchCards
};
