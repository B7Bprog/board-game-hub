import axios from "axios";
const gamesAPI = axios.create({
  baseURL: "https://belas-games.onrender.com/api",
});

export const getReviews = () => {
  return gamesAPI.get("/reviews").then((response) => {
    console.log(response, "<<< response");
  });
};
