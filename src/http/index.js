import axios from "axios";

export const getRecipesList = async (tags = null, size) => {
  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: size || "20", tags },
    headers: {
      "X-RapidAPI-Key": "972758969emsh1b4f7089d919d65p18c634jsn21ac83c4f9d2",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };
  return await axios.request(options);
};
