import {
  CloseOutlined,
  MinusOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ProductModal = ({
  isModalOpen,
  handleConfirm,
  handleCancel,
  description,
  image,
  title,
  stock,
  price,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [count, setCount] = useState(1);
  const { t } = useTranslation();

  const increaseCount = () => {
    setCount((prevCount) => (prevCount < stock ? prevCount + 1 : prevCount));
  };

  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  useEffect(() => {
    if (isModalOpen) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [isModalOpen]);

  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleCancel}
      />

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 transform ${
          isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-h-[80vh] overflow-y-auto p-6 pt-4 relative">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">{title}</h2>
            <Button
              type="text"
              onClick={handleCancel}
              icon={<CloseOutlined />}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <img
              className="w-full h-64 bg-gray-100 rounded-lg object-cover"
              src={image}
              alt={title}
            />
            <div className="flex flex-col gap-2">
              <p className="mb-6 text-gray-700">{description}</p>
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
                    onClick={increaseCount}
                    disabled={count === stock}
                    icon={<PlusOutlined />}
                    size="small"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <Button onClick={handleCancel} className="mr-2">
              {t("cancel")}
            </Button>
            <Button
              type="primary"
              onClick={handleConfirm}
              icon={<ShoppingCartOutlined />}
            >
              {t("addToCart")}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
