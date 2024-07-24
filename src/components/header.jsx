import HeaderIcon from "../assets/icons/headerIcon.png";
import DorpDown from "../assets/icons/dropdown.svg";
import { useNavigate } from "react-router-dom";
import Nightmode from "../assets/icons/nightmode.svg";
import Daymode from "../assets/icons/daymode.svg"
import { useState,useEffect } from "react";
import SideBar from "./sidebar";
const Header = ({handleToggle,isNightMode}) => {
  const navigate = useNavigate();

  return (
    <>
    <section className="">
    <div className=" relative  bg-[black] bg-opacity-50 flex justify-evenly  py-5   ">
        <div>
          <img src={HeaderIcon} onClick={()=>navigate("/")}  />
        </div>
        <div className="hidden md:flex text-[black] dark:text-[#848895] text-[17px] gap-10 items-center">
          <div className="flex">
            <a href="#">Learn</a>
            <img src={DorpDown} className="" />
          </div>
          <div className="flex">
            <a href="/build">Build</a>
            <img src={DorpDown} />
          </div>
          <div className="flex">
            <a href="#">Network</a>
            <img src={DorpDown} />
          </div>
          <div className="flex">
            <a href="#">Community</a>
            <img src={DorpDown} />
          </div>
          <div>
            <img src={isNightMode? Nightmode:Daymode} alt="" className="h-10 rounded-full"  onClick={handleToggle}/>
          </div>

        </div>
        <div className=" flex md:hidden">

        <SideBar handleToggle={handleToggle} isNightMode={isNightMode}/>
        </div>
      </div>
    </section>
     
    </>
  );
};
export default Header;
