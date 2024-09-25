import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Header from "./app/Header/Header";
import { ConfigProvider } from "antd";

import ProductList from "./app/Product/ProductList";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#273238",
              borderRadius: 4,
              fontFamily: "inter",
            },
          }}
        >
          <Header />
          <ProductList />
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
