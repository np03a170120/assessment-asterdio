import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const apiDetails = {
  getProducts: {
    url: "https://dummyjson.com/products?skip=85&limit=12",
    key: "GET_PRODUCTS_KEY",
  },
};

export const useProductList = () => {
  return useQuery({
    queryFn: async () => await axios.get(apiDetails.getProducts.url),
    queryKey: [apiDetails.getProducts.key],
    select(data) {
      return data?.data?.products;
    },
  });
};
