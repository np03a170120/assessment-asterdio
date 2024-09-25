import { Button } from "antd";
import { useState } from "react";
import { InfoCircleOutlined } from "@ant-design/icons"; // Importing the icon
import DetailProductModal from "./DetailProductModal";

const Product = ({ image, name, price, description, stock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative flex flex-col w-full rounded-lg bg-gray-200 hover:shadow-md cursor-pointer pb-2 min-h-[18rem] group"
        onClick={showModal}
      >
        <img className="h-64 w-full object-contain" src={image} alt={name} />
        <div className="flex-grow p-5">
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
        <DetailProductModal
          description={description}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          image={image}
          title={name}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          stock={stock}
          price={price}
        />
      )}
    </>
  );
};

export default Product;
