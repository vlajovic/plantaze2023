// import { baseUrl } from "../constants/Navigation";
const baseUrl = process.env.REACT_APP_BASE_URL;

export default async (table, args) => {
  const response = await fetch(`${baseUrl}/retrieve${table}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  return await response.json();
};
