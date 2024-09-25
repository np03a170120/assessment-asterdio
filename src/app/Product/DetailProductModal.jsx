import { Button, Modal } from "antd";
import React, { useState } from "react";

const DetailProductModal = ({
  name,
  isModalOpen,
  handleCancel,
  handleOk,
  description,
  image,
  title,
  stock,
}) => {
  const [count, setCount] = useState(1);

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
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <img className="rounded-t-lg w-full bg-gray-100" src={image} alt="" />
      <h1>{title}</h1>
      <h5 className="mb-2 text-md font-medium tracking-tight text-gray-900">
        {name}
      </h5>
      <p>{description}</p>
      <p>Available Stock: {stock}</p>
      <div className="flex items-center gap-2">
        <Button onClick={decreaseCount} disabled={count === 1}>
          -
        </Button>
        <span>{count}</span>
        <Button onClick={increaseCount} disabled={count === stock}>
          +
        </Button>
      </div>
    </Modal>
  );
};

export default DetailProductModal;
