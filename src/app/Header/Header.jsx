import Logo from "../../assets/header-logo.png";
import LanguageSelector from "../../component/LanguageSelector";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <div className="bg-[#273238] p-2">
          <div className="container mx-auto flex justify-between items-center">
            <img className="h-[2rem]" src={Logo} alt="asterdio_logo" />
            <LanguageSelector />
          </div>
        </div>
        <Navigation />
      </div>
    </>
  );
};

export default Header;
