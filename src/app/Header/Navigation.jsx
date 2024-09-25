import {
  HomeTwoTone,
  UnorderedListOutlined,
  TeamOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  const items = [
    {
      label: t("menuHome"),
      key: "mail",
      icon: <HomeTwoTone />,
    },
    {
      label: t("menuCategories"),
      key: "SubMenu",
      icon: <UnorderedListOutlined />,
      children: [
        {
          type: "group",
          label: t("menWear"),
          children: [
            {
              label: t("menShortSleeve"),
              key: "1",
            },
            {
              label: t("menCheckShirt"),
              key: "2",
            },
          ],
        },
        {
          type: "group",
          label: t("menWear"),
          children: [
            {
              label: t("menSneaker"),
              key: "3",
            },
            {
              label: t("menTrainer"),
              key: "4",
            },
          ],
        },
      ],
    },
    {
      label: t("menuAboutUs"),
      icon: <TeamOutlined />,
      disabled: true,
    },
    {
      label: t("menuContactUs"),
      icon: <PhoneOutlined />,
      disabled: true,
    },
    {
      label: t("menuFaqs"),
      icon: <QuestionCircleOutlined />,
      disabled: true,
    },
  ];

  return (
    <Menu
      className="container mx-auto font-semibold"
      mode="horizontal"
      items={items}
    />
  );
};

export default Navigation;
