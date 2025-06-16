const API_URL = import.meta.env.VITE_API_URL; // http://localhost:5173/api

export const fetchStats = async () => {
  const response = await fetch(`${API_URL}/stats`);
  return response.json();
};