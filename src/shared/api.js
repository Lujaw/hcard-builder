import fetch from "isomorphic-fetch";

const apiUrl = "http://localhost:3000/api";

const fetchCardById = (id) => {
  return fetch(`${apiUrl}/card/${id}`)
    .then((data) => data.json())
    .then((data) => console.log(data) || data)
    .catch((error) => {
      console.error(error);
      return null;
    });
};

const fetchCards = () => {
  return fetch(`${apiUrl}/cards`)
    .then((data) => data.json())
    .then((data) => console.log(data) || data)
    .catch((error) => {
      console.error(error);
      return null;
    });
};

export {
  fetchCardById,
  fetchCards
};
