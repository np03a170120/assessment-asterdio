import { InfoCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
import ProductModal from "./ProductModal";

const Product = ({ image, name, price, description, stock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="relative flex flex-col w-full rounded-lg bg-gray-100 border  cursor-pointer pb-2 min-h-[18rem] group "
        onClick={showModal}
      >
        <img className="h-64 w-full object-contain" src={image} alt={name} />
        <div className="flex-grow p-5 pt-0">
          <h5 className="mb-1 text-md font-normal line-clamp-1">{name}</h5>
          <p className="mb-3 font-semibold text-lg">Rs.{price}</p>
        </div>
        <div className="absolute top-4 right-4 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            className="bg-blue-500  rounded-full shadow-md"
            icon={<InfoCircleOutlined />}
          />
        </div>
      </div>

      {isModalOpen && (
        <ProductModal
          description={description}
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          image={image}
          title={name}
          stock={stock}
          price={price}
        />
      )}
    </div>
  );
};

export default Product;
