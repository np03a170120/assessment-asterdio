import { useProductList } from "../../api/product.query";
import Product from "./Product";

const ProductList = () => {
  const { data, isPending } = useProductList();
  return (
    <div className="container mx-auto">
      <h1 className="my-6 text-lg font-semibold">Asterdio Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data?.map((item) => {
          return (
            <>
              {isPending ? (
                "pending"
              ) : (
                <Product
                  price={item?.price}
                  name={item?.title}
                  image={item?.thumbnail}
                  description={item?.description}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
