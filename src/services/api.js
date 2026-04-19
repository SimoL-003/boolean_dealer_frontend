import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function getCars() {
  const res = await axios.get(`${BASE_URL}/api/cars`);
  return res.data;
}

async function getCarDetails(id) {
  const res = await axios.get(`${BASE_URL}/api/cars/${id}`);
  console.log(id);

  return res.data;
}

const getImageUrl = (path) => `${BASE_URL}/storage/${path}`;

export { getCars, getImageUrl, getCarDetails };
