import { EyeOutlined } from "@ant-design/icons";
import { Badge, Button, Space, Table, Tag } from "antd";
import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ProductModal from "./ProductModal";

const ProductTable = ({ data, isPending }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (record) => {
    setSelectedProduct(record);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const columns = useMemo(
    () => [
      {
        title: t("image"),
        dataIndex: "thumbnail",
        key: "thumbnail",
        render: (_, record) => (
          <Space size="middle">
            <img
              className="h-[4.5rem] rounded-md object-contain bg-gray-100"
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
        title: t("brand"),
        dataIndex: "brand",
        key: "brand",
      },
      {
        title: t("price"),
        dataIndex: "price",
        key: "price",
        className: "column-right",
      },
      {
        title: `${t("discount")} (%)`,
        dataIndex: "discountPercentage",
        key: "discountPercentage",
        className: "column-right",
      },

      {
        title: t("availability"),
        dataIndex: "availabilityStatus",
        key: "availabilityStatus",
        render: (_, record) => {
          return record?.availabilityStatus === "In Stock" ? (
            <Tag color="success">In Stock</Tag>
          ) : (
            <Tag color="error">Out of Stock</Tag>
          );
        },
      },
      {
        title: t("action"),
        key: "action",
        className: "column-right",
        render: (_, record) => (
          <Space size="middle">
            <Button
              className="text-gray-800 text-xs"
              onClick={() => showModal(record)}
              size="small"
              icon={<EyeOutlined className="text-gray-800 text-xs" />}
            >
              {" "}
              {t("view")}
            </Button>
          </Space>
        ),
      },
    ],
    [t]
  );

  return (
    <>
      <Table
        rowKey={(record) => record.id}
        className="px-2"
        tableLayout="auto"
        scroll={{ x: "max-content" }}
        loading={isPending}
        columns={columns}
        dataSource={data}
      />
      {isModalOpen && selectedProduct && (
        <ProductModal
          description={selectedProduct.description}
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
          isModalOpen={isModalOpen}
          image={selectedProduct.thumbnail}
          title={selectedProduct.title}
          stock={selectedProduct.stock}
          price={selectedProduct.price}
        />
      )}
    </>
  );
};

export default ProductTable;
