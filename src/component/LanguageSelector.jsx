import { useTranslation } from "react-i18next";
import { FlagIcon } from "react-flag-kit";
import { Select } from "antd";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Select
      size="small"
      defaultValue="en"
      style={{ width: 60 }}
      onChange={changeLanguage}
      options={[
        { value: "en", label: <FlagIcon code="US" size={48} /> },
        { value: "np", label: <FlagIcon code="NP" size={48} /> },
      ]}
    />
  );
};

export default LanguageSelector;
