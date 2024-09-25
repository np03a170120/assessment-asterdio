import { EyeOutlined } from "@ant-design/icons";
import { Badge, Button, Space, Table } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import DetailProductModal from "./DetailProductModal";

const ProductTable = ({ data, isPending }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (record) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const columns = [
    {
      title: t("image"),
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <Space size="middle">
          <img
            className="h-20  rounded-md object-contain bg-gray-100"
            src={record?.thumbnail}
            alt={record?.title}
          />
        </Space>
      ),
    },
    {
      title: t("product"),
      dataIndex: "title",
      key: "title",
    },

    {
      title: t("price"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: `${t("discount")} (%)`,
      dataIndex: "discountPercentage",
      key: "discountPercentage",
    },
    {
      title: t("brand"),
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: t("availability"),
      dataIndex: "availabilityStatus",
      key: "availabilityStatus",
      render: (_, record) => (
        <Badge
          className="site-badge-count-109"
          count={record.availabilityStatus ? "In Stock" : "Out of Stock"}
          style={{
            backgroundColor: record.availabilityStatus ? "#52c41a" : "#c4521a",
          }}
        />
      ),
    },
    {
      title: t("action"),
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => showModal(record)}
            size="small"
            icon={<EyeOutlined />}
          >
            View
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        scroll={{ x: 100 }}
        loading={isPending}
        columns={columns}
        dataSource={data}
      />
      {isModalOpen && selectedProduct && (
        <DetailProductModal
          description={selectedProduct.description}
          handleOk={handleOk}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          image={selectedProduct.thumbnail}
          title={selectedProduct.title}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          stock={selectedProduct.stock}
          price={selectedProduct.price}
        />
      )}
    </>
  );
};

export default ProductTable;
