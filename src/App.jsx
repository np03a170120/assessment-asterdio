import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App as AntdApp, ConfigProvider } from "antd";
import "./App.css";
import Header from "./app/Header/Header";

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
              fontFamily: "inter",
            },
          }}
        >
          <AntdApp>
            <Header />
            <ProductList />
          </AntdApp>
        </ConfigProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
