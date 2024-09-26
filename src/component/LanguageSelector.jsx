import { Select } from "antd";
import { FlagIcon } from "react-flag-kit";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "en";
    setSelectedLanguage(storedLanguage);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <Select
      size="small"
      value={selectedLanguage}
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
