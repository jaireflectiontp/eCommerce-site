import { BASE_URL } from "../constants";

export const fetchProducts = async () => {
    const response = await fetch(`/api/products`);
    const data = await response.json();
    return data;
};