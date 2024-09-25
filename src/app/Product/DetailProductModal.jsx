import { Modal } from "antd";
import React from "react";

const DetailProductModal = ({
  name,
  isModalOpen,
  handleCancel,
  handleOk,
  description,
  image,
}) => {
  return (
    <Modal
      title={name}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <img className="rounded-t-lg w-full bg-gray-100" src={image} alt="" />
      <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900">
        {name}
      </h5>
      <p>{description}</p>
    </Modal>
  );
};

export default DetailProductModal;
