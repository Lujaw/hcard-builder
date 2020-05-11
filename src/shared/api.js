import fetch from "isomorphic-fetch";

const apiUrl = "http://localhost:3000/api";

const fetchCardById = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/card/${id}`);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Could not find the card");
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

const fetchCards = async () => {
  try {
    const response = await fetch(`${apiUrl}/cards`);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Could not find cards");
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

export {
  fetchCardById,
  fetchCards
};
