import {
  HomeTwoTone,
  UnorderedListOutlined,
  TeamOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Home",
    key: "mail",
    isActive: true,
    icon: <HomeTwoTone />,
  },
  {
    label: "Categories",
    key: "SubMenu",
    icon: <UnorderedListOutlined />,
    children: [
      {
        type: "group",
        label: "Essence",
        children: [
          {
            label: "Essence Mascara Lash Princess",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Beauty",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    icon: <TeamOutlined />,
  },
  {
    label: "Contact Us",
    icon: <PhoneOutlined />,
  },
  {
    label: "Faqs",
    icon: <QuestionCircleOutlined />,
  },
];
const Navigation = () => {
  return (
    <Menu
      className="container mx-auto sticky top-10 z-10 shadow-sm font-semibold"
      mode="horizontal"
      items={items}
    />
  );
};
export default Navigation;
