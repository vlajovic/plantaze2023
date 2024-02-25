// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default async (endpoint, year) => {
  const response = await fetch(`${baseUrl}/${endpoint}?year=${year}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
