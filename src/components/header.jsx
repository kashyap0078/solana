import HeaderIcon from "../assets/icons/headerIcon.png";
import DorpDown from "../assets/icons/dropdown.svg";
import { useNavigate } from "react-router-dom";
import Nightmode from "../assets/icons/nightmode.svg";
import Daymode from "../assets/icons/daymode.svg";
import LogoDay from "../assets/images/FNX Logo(light).png";
import LogoNight from "../assets/images/FNX Logo(dark).png";

import SideBar from "./sidebar";
const Header = ({ handleToggle, isNightMode }) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="">
        <div className=" relative  bg-[black] bg-opacity-50 flex justify-evenly lg:justify-between px-2  py-5   ">
          <div className=" flex lg:hidden">
            <img
              src={isNightMode ? LogoNight : LogoDay}
              onClick={() => navigate("/")}
              className="h-12"
            />
          </div>
          <div className="hidden lg:flex text-[black] dark:text-[#848895] text-[17px] gap-8 items-center">
            <div>
              <img
                src={isNightMode ? LogoNight : LogoDay}
                onClick={() => navigate("/")}
                className="h-12"
              />
            </div>
            <div className="flex">
              <a href="/">Home</a>
            </div>
            <div className="flex truncate">
              <a href="/build">About us</a>
            </div>
            <div className="flex">
              <a href="/services">Services</a>
            </div>
            <div className="flex">
              <a href="/portfolio">Portfolio</a>
            </div>
            <div className="flex">
              <a href="/blog">Blog</a>
            </div>
            <div className="flex">
              <a href="/career">Career</a>
            </div>
            <div className="flex truncate">
              <a href="/contact-us">Contact us</a>
            </div>
            <div>
              <img
                src={isNightMode ? Nightmode : Daymode}
                alt=""
                className="h-10 rounded-full"
                onClick={handleToggle}
              />
            </div>
          </div>
          <div>
            <button className="px-6 py-2 border dark:border-white rounded-full hover:bg-white hover:text-black truncate">
              Get a Quote
            </button>
          </div>
          <div className=" flex lg:hidden ">
            <SideBar handleToggle={handleToggle} isNightMode={isNightMode} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
