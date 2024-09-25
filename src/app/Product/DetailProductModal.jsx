import { Button, Modal } from "antd";
import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

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
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      title={title}
    >
      <img
        className="rounded-t-lg w-full bg-gray-100  min-h-[450px] mb-2"
        src={image}
        alt=""
      />
      <h5 className="mb-3 text-md font-medium tracking-tight text-gray-900">
        {name}
      </h5>
      <p className="mb-3">{description}</p>
      <p className="mb-1">Available Stock: {stock}</p>
      <div className="flex items-center gap-2">
        <Button
          onClick={decreaseCount}
          disabled={count === 1}
          icon={<MinusOutlined />}
        ></Button>
        <span>{count}</span>
        <Button
          icon={<PlusOutlined />}
          onClick={increaseCount}
          disabled={count === stock}
        ></Button>
      </div>
    </Modal>
  );
};

export default DetailProductModal;
