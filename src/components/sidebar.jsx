import { useState } from "react";
import DorpDown from "../assets/icons/dropdown.svg";
import { useNavigate } from "react-router-dom";
import Nightmode from "../assets/icons/nightmode.svg";
import Daymode from "../assets/icons/daymode.svg"
import Header from "../assets/icons/headerIcon.png";

const SideBar = ({handleToggle,isNightMode}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();


  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <div className="relative z-10  ">
        <svg
         className="h-10 w-10 "
          viewBox="0 0 24 24"
          fill="none"
          onClick={toggleSidebar}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 18L20 18"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M4 12L20 12"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M4 6L20 6"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </g>
        </svg>
      </div>

      <div
        id="drawer-navigation"
        className={`fixed top-0 right-0 z-40 w-64 h-screen p-4 transition-transform ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } bg-[#212121] opacity-90 text-white `}
      >
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            onClick={() => {
              setSidebarVisible(false);
            }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex justify-center mt-4 ">
          <img src={Header} />
        </div>

        <div className="py-4 ">
        <div className="flex flex-col text-[white] text-[17px] gap-10 items-start mx-10 my-10">
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
        </div>
      </div>
    </>
  );
};
export default SideBar;