import {
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const DetailProductModal = ({
  name,
  isModalOpen,
  handleCancel,
  description,
  image,
  title,
  stock,
  price,
}) => {
  const [count, setCount] = useState(1);
  const { t } = useTranslation();
  const increaseCount = () => {
    setCount((prevCount) => {
      if (prevCount < stock) {
        return prevCount + 1;
      }
      return prevCount;
    });
  };

  const decreaseCount = () => {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount;
    });
  };

  return (
    <Modal
      width={"50rem"}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          {t("cancel")}
        </Button>,
        <Button
          icon={<ShoppingCartOutlined />}
          key="add-to-cart"
          type="primary"
        >
          {t("addToCart")}
        </Button>,
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-0 pt-4">
        <img
          className="w-full h-[20rem] bg-gray-100 rounded-lg object-cover"
          src={image}
          alt={name}
        />
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="text-lg md:text-2xl font-semibold">{title}</h2>
            <h5 className="mb-3 text-base md:text-lg font-medium text-gray-900">
              {name}
            </h5>
            <p className="mb-6 text-sm text-gray-700">{description}</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <p className="font-medium">{t("price")}:</p>
              <p className="text-lg font-semibold">Rs.{price}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">{t("availableStock")}:</p>
              <p className="text-lg font-semibold">{stock}</p>
            </div>
            <div className="flex items-center justify-between">
              <h6 className="font-medium">{t("quantity")}:</h6>
              <div className="flex items-center gap-2">
                <Button
                  onClick={decreaseCount}
                  disabled={count === 1}
                  icon={<MinusOutlined />}
                  size="small"
                />
                <span className="text-lg">{count}</span>
                <Button
                  icon={<PlusOutlined />}
                  onClick={increaseCount}
                  disabled={count === stock}
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailProductModal;
