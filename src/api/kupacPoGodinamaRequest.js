// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default async (kupac) => {
  const response = await fetch(`${baseUrl}/kupacPoGodinama?kupac=${kupac}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
