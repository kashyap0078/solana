import Header from "../../components/header";
import RightImage from "../../assets/images/right.png";
import LeftImage from "../../assets/images/left.png";
import Brave from "../../assets/icons/brave.svg";
import Circle from "../../assets/icons/circile.svg";
import Discord from "../../assets/icons/discord.svg";
import Google from "../../assets/icons/google.svg";
import Jump from "../../assets/icons/jump.svg";
import Lalaplaza from "../../assets/icons/lalaplaza.svg";
import MagicEden from "../../assets/icons/magicEden.svg";
import BgWave from "../../assets/images/backgroundwave.png";
import Data from "../../assets/images/Data.png";
import AnyBodies from "../../assets/images/anybodies.png";
import AnybodyIcon from "../../assets/icons/anybody.svg";
import Clay from "../../assets/icons/clay.png";
import Monkey from "../../assets/icons/monkey.png";
import Fox from "../../assets/icons/fox.png";
import Okay from "../../assets/icons/okay.png";
import Wave from "../../assets/images/wave2.png";
import Collage1 from "../../assets/images/collage1.png";
import Collage2 from "../../assets/images/collage2.png";
import Collage3 from "../../assets/images/collage3.png";
import Collage4 from "../../assets/images/collage4.png";
import Collage5 from "../../assets/images/collage5.png";
import Collage6 from "../../assets/images/collage6.png";
import Collage7 from "../../assets/images/collage7.png";
import Collage8 from "../../assets/images/collage8.png";
import HomePage from "../../assets/images/home.png";
import Footer from "../../components/footer";
import { useDarkMode } from "../../context/Darkmode";
import { useEffect,useState } from "react";
const Home = () => {
  const { isNightMode,  handleToggle } = useDarkMode();

  return (
    <>
      <section>
      <Header handleToggle={handleToggle} isNightMode={isNightMode} />
        <div
          className={`relative h-full flex justify-center text-center `}
        >
          <div
          className={`absolute top-0 h-full w-full bg-no-repeat bg-cover`}
          style={{ backgroundImage: isNightMode ? `url(${HomePage})` : 'none' }}
          
          ></div>
          <div className="relative z-10 mx-10 max-w-full lg:max-w-[50%] flex flex-col  mb-28 mt-10 lg:my-28 ">
            <h1 className="text-[38px] sm:text-[45px] md:text-[60px] lg:text-[70px] my-0 ">
              Powerful for developers. Fast for everyone.
            </h1>
            <p className="mt-4 sm:mx-24 text-[16px] sm:text-[18px]">
              Bring blockchain to the people. Solana supports experiences for
              power users, new consumers, and everyone in between.
            </p>
            <div className="mt-6 gap-5 flex flex-col  sm:flex-row justify-center">
              <button className="px-6 py-2 text-[white] dark:text-[black] bg-gradient-to-r from-[#8C01FA] to-black rounded-full ">
                START BUILDING
              </button>
              <button className="px-6 py-2 border dark:border-white rounded-full hover:bg-white hover:text-black">
                READ DOCS
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center">
          <div>
            <p className="text-[#618ADC] text-[15px] mx-5 ">
              Powering tools and integrations from companies all around the
              world
            </p>
          </div>
          <div className="flex flex-wrap justify-center my-5 gap-6  bg-[#e5e7eb] dark:bg-[black] ">
            <img src={Brave} />
            <img src={Circle} />
            <img src={Discord} />
            <img src={Google} />
            <img src={Jump} />
            <img src={Lalaplaza} />
            <img src={MagicEden} />
          </div>
        </div>
      </section>
      <section className="">
        <div
          className="min-h-screen w-full bg-cover bg-center"
          style={{ backgroundImage:isNightMode? `url(${BgWave})`:'none' }}
        >
          <div className="flex flex-col items-center lg:flex-row lg:justify-center text-[38px] gap-28 mx-20 my-20">
            <p className="mt-20 lg:w-[25%]">Join a Community of millions.</p>
            <img src={Data} alt="" className="" />
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-center text-[32px] sm:text-[38px] gap-16 ">
            <div className="mt-48 justify-center">
              <p className="lg:w-[60%] ">Made for mass adoption.</p>
              <div className="flex items-end  gap-1 mt-[-30px]  ">
                <p className="text-[#1FCFF1] ">. </p>
                <p className="text-[#C4C4C4] text-[16px]">LIVE DATA</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-16">
              <div className="flex-col gap-5 mt-16">
                <div className="w-[340px] bg-[black] bg-opacity-50 rounded-[10px] p-5 my-2">
                  <h2 className="border-l m-2 p-2 border-l-2 border-l-[#1FCFF1] ">
                    Fast
                  </h2>
                  <p className="text-[17px] text-[#C4C4C4]">
                    Don’t keep your users waiting. Solana has block times of 400
                    milliseconds — and as hardware gets faster, so will the
                    network.
                  </p>
                  <div className="flex  items-end gap-1 ">
                    <p className="text-[#1FCFF1] mt-[-30px]">.</p>
                    <h2>3,969</h2>
                  </div>
                  <p className="text-[17px] text-[#C4C4C4]">
                    TRANSACTIONS PER SECONDS{" "}
                  </p>
                </div>
                <div className="w-[340px] bg-[black] bg-opacity-50 rounded-[10px] p-5 my-2">
                  <h2 className="border-l m-2 p-2 border-l-2 border-l-[#9945FF]">
                    Scalable
                  </h2>
                  <p className="text-[17px] text-[#C4C4C4]">
                    Get big, quick. Solana is made to handle thousands of
                    transactions per second, and fees for both developers and
                    users remain less than $0.01.
                  </p>
                  <div className="flex  items-end gap-1 ">
                    <p className="text-[#1FCFF1] mt-[-30px]">.</p>
                    <h2>163,077,581,394</h2>
                  </div>
                  <p className="text-[17px] text-[#C4C4C4]">
                    Total transactions
                  </p>
                </div>
              </div>
              <div className="flex-col gap-5">
                <div className="w-[340px] bg-[black] bg-opacity-50 rounded-[10px] p-5 my-2">
                  <h2 className="border-l m-2 p-2 border-l-2 border-l-[#FFD512]">
                    Decentralized
                  </h2>
                  <p className="text-[17px] text-[#C4C4C4]">
                    Decentralized The Solana network is validated by thousands
                    of nodes that operate independently of each other, ensuring
                    your data remains secure and censorship resistant. 1,675
                    Validator nodes
                  </p>
                  <div className="flex  items-end gap-1 ">
                    <p className="text-[#1FCFF1] mt-[-30px]">.</p>
                    <h2>1675</h2>
                  </div>
                  <p className="text-[17px] text-[#C4C4C4]">Validator nodes</p>
                </div>
                <div className="w-[340px] bg-[black] bg-opacity-50 rounded-[10px] p-5 my-2">
                  <h2 className="border-l m-2 p-2 border-l-2 border-l-[#19FB9B]">
                    Energy Efficient
                  </h2>
                  <p className="text-[17px] text-[#C4C4C4]">
                    Solana’s proof of stake network and other innovations
                    minimize its impact on the{" "}
                    <span className="text-[#19FB9B] underline cursor-pointer">
                      environment
                    </span>
                    . Each Solana transaction uses about the same energy as a
                    few Google searches.
                  </p>
                  <div className="flex  items-end gap-1 ">
                    <p className="text-[#1FCFF1] mt-[-30px]">.</p>
                    <h2>0%</h2>
                  </div>
                  <p className="text-[17px] text-[#C4C4C4]">
                    Net carbon impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" dark:text-white pt-28 flex flex-col items-center">
        <div className="flex justify-center w-full">
          <div className="flex flex-col items-center lg:flex-row  lg:justify-between w-full max-w-[1100px]">
            <h1 className="text-[30px]">Build for growth.</h1>
            <div className="flex gap-5 flex-wrap text-[white]">
              <p className="bg-[#111111] px-5 py-2 rounded-[16px] border-2 border-[#A962FF]">
                NFTs
              </p>
              <p className="bg-[#111111]  px-5 py-2 rounded-[16px]">DeFi</p>
              <p className="bg-[#111111] px-5 py-2 rounded-[16px]">Payments</p>
              <p className="bg-[#111111] px-5 py-2 rounded-[16px]">Gaming</p>
              <p className="bg-[#111111] px-5 py-2 rounded-[16px]">DAOs</p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex flex-col lg:flex-row lg:justify-center">
            <img src={AnyBodies} alt="" />
            <div className="flex-col items-center justify-center text-[21px] bg-[#e5e7eb] dark:bg-[#111111] max-w-[550px] p-5 sm:p-10 md:p-16 lg:p-20">
              <img src={AnybodyIcon} alt="" />
              <p className="my-5">
                It’s time to bridge the digital and physical. Anybodies helps
                established brands like Toys’R’Us connect real-life places and
                products with NFTs.
              </p>
              <p className="text-[#A962FF]">Learn more about NFTs on Solana</p>
            </div>
          </div>
          <div className="flex justify-evenly my-10">
            <img src={Clay} alt="" />
            <img src={Monkey} alt="" />
            <img src={Fox} alt="" />
            <img src={Okay} alt="" />
          </div>
        </div>
      </section>
      <section className="dark:text-[white] flex flex-col   ">
        <div className="absolute  min-h-screen w-full  dark:bg-black  flex justify-center items-center">
          <img
            src={isNightMode? Wave:""}
            alt=""
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="flex mx-5 lg:mx-40 my-4">
          <h2 className=" text-[24px] sm:text-[30px] mx-10 my-5 z-10 ">
            Join a thriving community.
          </h2>
        </div>
        <div className="flex  gap-3 w-full relative z-10 ">
          <div className=" flex flex-col gap-3">
            <img src={Collage1} alt="" />
            <img src={Collage2} alt="" />
          </div>
          <div>
            <img src={Collage3} alt="" />
          </div>
          <div className=" flex flex-col gap-3">
            <img src={Collage4} alt="" />
            <img src={Collage5} alt="" />
          </div>
          <div>
            <img src={Collage6} alt="" />
          </div>
          <div className=" flex flex-col gap-3">
            <img src={Collage7} alt="" />
            <img src={Collage8} alt="" />
          </div>
        </div>
        <div className="relative z-10 flex flex-col items-center my-20">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[38px] mx-10 lg:w-[50%] ">
            It's time to join the thousands of creators, artists, and developers
            using Solana.
          </h2>
          <button className="px-6 py-2 text-[white] dark:text-[black] bg-gradient-to-r from-[#8C01FA] to-black rounded-full my-4 ">
            START BUILDING
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Home;
