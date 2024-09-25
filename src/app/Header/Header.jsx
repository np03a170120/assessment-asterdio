import Logo from "../../assets/header-logo.png";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <>
      <div className=" bg-[#00D563] p-2 sticky top-0 z-10">
        <div className="container mx-auto">
          <img className="h-[2rem]" src={Logo} alt="" />
        </div>
      </div>
      <Navigation />
    </>
  );
};

export default Header;
