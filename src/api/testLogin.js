import { baseUrl } from "../constants/Navigation";

export default async (endpoint) => {
  const response = await fetch(`${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};
