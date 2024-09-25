import { useState } from "react";
import DetailProductModal from "./DetailProductModal";
import { Button } from "antd";

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
      <div className="w-full rounded-lg  bg-gray-100 hover:shadow-md cursor-pointer">
        <img className=" h-64 w-full object-contain" src={image} alt="" />
        <div className="p-5 pt-0 pb-0">
          <h5 className="mb-1 text-md font-medium  text-gray-900">{name}</h5>
          <p className="mb-3 font-normal text-gray-900">Rs.{price}</p>
          <Button onClick={showModal}>Detail</Button>
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
        />
      )}
    </>
  );
};

export default Product;
