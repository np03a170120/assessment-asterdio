import { AppstoreOutlined, MenuOutlined } from "@ant-design/icons";
import { App, Button } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useProductList } from "../../api/product.query";
import Product from "./Product";
import ProductTable from "./ProductTable";

const ProductList = () => {
  const { message } = App.useApp();
  const { data, isPending, isError } = useProductList();
  const [cardView, setCardView] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    if (isError) {
      const errorMessage =
        "Unable to connect to the server. Please try again later";

      message.error(errorMessage);
    }
  }, [isError]);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center  px-2">
        <h1 className="my-6 text-lg font-semibold">{t("pageTitle")}</h1>
        <div className="flex gap-1">
          <Button
            type={cardView === 0 ? "primary" : "dashed"}
            variant={"filled"}
            onClick={() => setCardView(0)}
            icon={<MenuOutlined />}
          ></Button>
          <Button
            type={cardView === 1 ? "primary" : "dashed"}
            onClick={() => setCardView(1)}
            icon={<AppstoreOutlined />}
          ></Button>
        </div>
      </div>

      {cardView === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-2 pb-4">
          {data?.map((item) => {
            return (
              <Product
                key={item.id}
                stock={item?.stock}
                price={item?.price}
                name={item?.title}
                image={item?.thumbnail}
                description={item?.description}
              />
            );
          })}
        </div>
      )}
      {cardView === 0 && <ProductTable isPending={isPending} data={data} />}
    </div>
  );
};

export default ProductList;
