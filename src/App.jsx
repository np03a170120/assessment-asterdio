import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Header from "./app/Header/Header";
import ProductList from "./app/Product/ProductList";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <ProductList />
      </QueryClientProvider>
    </>
  );
}

export default App;
