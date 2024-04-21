import axios from "axios";

export function useAxios() {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL 
  });

  return instance;
}
