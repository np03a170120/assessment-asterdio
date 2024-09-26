import { useQuery } from "@tanstack/react-query";
import { App } from "antd";

import axios from "axios";

export const apiDetails = {
  getProducts: {
    url: "https://dummyjson.com/products?skip=85&limit=12",
    key: "GET_PRODUCTS_KEY",
  },
};

export const useProductList = () => {
  const { message } = App.useApp();
  return useQuery({
    queryFn: async () => await axios.get(apiDetails.getProducts.url),
    queryKey: [apiDetails.getProducts.key],
    select(data) {
      return data?.data?.products;
    },
    throwOnError: () => {
      const errorMessage =
        "Unable to connect to the server. Please try again later";
      message.error(errorMessage);
    },
  });
};
