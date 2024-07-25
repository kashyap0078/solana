import React from "react";
import stockExchange from "../../assets/icons/stockExchangeIcon.svg";
import Gif from "../../assets/images/build.gif";
import mainImg from "../../assets/images/dcbackground.png";
import LeftArrow from "../../assets/icons/arrowCircle.svg";
import Card1 from "../../assets/images/card1.png";
import Card2 from "../../assets/images/card2.png";
import Card3 from "../../assets/images/card3.png";
import Card4 from "../../assets/images/card4.png";
import Card5 from "../../assets/images/card5.png";
import Card6 from "../../assets/images/card6.png";
import LeftUpArrow from "../../assets/icons/leftupArrow.svg";
import ChangeLog from "../../assets/images/changelog.png";
import Youtube from "../../assets/icons/youtube.svg";
import Podcast from "../../assets/icons/podcast.svg";

const Build = () => {
  const courses = [
    {
      id: 1,
      img: Card1,
      button: "14 Chapters",
      head: "Buildspace",
    },
    {
      id: 2,
      img: Card2,
      button: "12 Chapters",
      head: "Solana Bytes",
    },
    {
      id: 3,
      img: Card3,
      button: "1 Chapters",
      head: "Scaffold Series",
    },
    {
      id: 4,
      img: Card4,
      button: "4 Chapters",
      head: "Freecodecamp Solana Course",
    },
    {
      id: 5,
      img: Card5,
      button: "167 Chapters",
      head: "Solana Development by Knox",
    },
    {
      id: 6,
      img: Card6,
      button: "8 Chapters",
      head: "Solana Bootcamp ",
    },
  ];

  const resources = [
    {
      id: 1,
      head: "Core Documentation",
      desc: "The official Solana documentation on developing, validators, SPL tokens, wallets and more.",
    },
    {
      id: 2,
      head: "Solana Cookbook",
      desc: "The Solana Cookbook is a developer resource that provides the essential concepts and references for building applications on Solana.",
    },
    {
      id: 3,
      head: "Solana Stack Exchange",
      desc: "Solana Stack Exchange is a question and answer site for Solana software users and developers.",
    },
    {
      id: 4,
      head: "Solana Playground",
      desc: "Easily build, deploy and test Solana programs and smart contracts from a browser IDE.",
    },
    {
      id: 5,
      head: "create-solana-dapp",
      desc: "Get up and running fast with Solana dApps, generate a project template in seconds.",
    },
    {
      id: 6,
      head: "Anchor Docs",
      desc: "Anchor is a framework for Solana's Sealevel runtime providing several convenient developer tools for writing smart contracts.",
    },
    {
      id: 7,
      head: "Solana Program Library",
      desc: "The Solana Program Library (SPL) is a collection of on-chain programs targeting the Sealevel parallel runtime.",
    },
    {
      id: 8,
      head: "Program Examples",
      desc: "A list of curated examples for a wide range of use cases implemented using on-chain programs.",
    },
  ];

  return (
    <>
      
      <section className="max-w-[1252px] mx-auto text-[black] dark:text-[white] flex justify-center">
        <div className="w-full flex flex-col md:flex-row md:justify-between items-center lg:ml-20">
          <div className="mx-4 md:w-1/2 flex flex-col ">
            <p className=" text-[45px] sm:text[75px] md:text-[94px] leading-none ">Developer Resources</p>
            <p className="text-[21px] text-[#C4C4C4] my-4">
              A manual for joining the Solana <br />
              ecosystem. By builders for builders.
            </p>
            <div className="flex gap-2">
              <button className="text-[black] bg-[#14F195] rounded-full px-6 py-2 truncate">
                Build Now
              </button>
              <button className="flex items-center gap-2 rounded-full px-6 py-2 border-2 truncate">
                Stock Exchange <img src={stockExchange} alt="" />
              </button>
            </div>
          </div>
          <div>
            <img src={Gif} alt="" />
          </div>
        </div>
      </section>
      <section className="max-w-[1252px] mx-auto text-[black] dark:text-[white] relative">
        <div className=" mx-4 sm:mx-20 ">
          <h1 className="text-[38px] sm:mx-5">Get started.</h1>
          <p className="text-[20px] text-[#C4C4C4]">
            Use these Solana Foundation and community courses to begin your
            journey into Solana development.
          </p>
        </div>

        <div className="relative mt-10 flex justify-center">
          <img
            src={mainImg}
            alt="Solana Development"
            className=" h-[370px] object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start z-10 space-y-4 p-5 sm:p-20 lg:mx-20">
            <button className="bg-[#9945FF] rounded-full px-6 py-2">
              17 Chapters
            </button>
            <h1 className=" text-[30px] sm:text-[39px] w-full">Solana Development Course</h1>
            <p className="text-[18px] lg:w-1/3">
              Quickstart your Solana development starting from nothing to
              complex programs.
            </p>
            <img src={LeftArrow} alt="Left Arrow" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 sm:mx-20 my-10">
  {courses.map((item) => (
    <div key={item.id} className="relative text-[black] dark:text-[white] rounded-lg overflow-hidden">
      <img
        src={item.img}
        alt={`Course ${item.id}`}
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-end p-4 py-10 ">
        <div className="flex flex-col w-[75%]">
          <button className="bg-[#9945FF] text-white rounded-full px-4 py-2 w-2/3">
            {item.button}
          </button>
          <h2 className="text-xl font-semibold">{item.head}</h2>
        </div>
        <div className="flex-shrink-0">
          <img src={LeftArrow} alt="" className="max-w-full max-h-full" />
        </div>
      </div>
    </div>
  ))}
</div>
      </section>
      <section className="max-w-[1252px] mx-auto text-[black] dark:text-[white]  ">
        <div className="mx-4 sm:mx-20">
          <h1 className="text-[37px]">Dig deeper.</h1>
          <p className="text-[20px] text-[#C4C4C4]">
            {" "}
            Learn from resources across the greater Solana ecosystem.
          </p>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-5 sm:mx-20 mb-10 ">
          {resources.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  className="flex flex-col items-start mx-4 my-6 space-y-4 bg-[#e5e7eb] dark:bg-[#19161C] p-6 rounded-md"
                >
                  <p className="text-[#9945FF] text-[12px]">TOOL / LIBRARY</p>
                  <p className="text-[19px]">{item.head}</p>
                  <p className="text-[16px]">{item.desc}</p>
                  <div className="flex pt-10">
                    <p>LEARN MORE</p>
                    <img src={LeftUpArrow} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <section className=" text-[black] dark:text-[white] relative dark:bg-gradient-to-b from-[#19161C] to-[black]">
        <div className="max-w-[1252px]  mx-auto">
          <div className="pt-10 mx-4 sm:mx-20">
            <h1 className="text-[36px]">Go to the source.</h1>
            <p className="text-[20px] text-[#C4C4C4]">
              Read the documentation for Solana and popular tools.
            </p>
          </div>
          <div className="flex flex-col py-4 mx-20">
            <div className="flex  flex-col items-center lg:flex-row lg:justify-between gap-16">
              <div className="flex flex-col">
                <div className="flex border-b py-6 gap-5 lg:gap-36    ">
                  <h2 className="text-[32px] truncate">Solana Docs</h2>
                  <div className="flex gap-2 border-2 items-center rounded-full  px-6">
                    <button className="truncate">VIEW ALL</button>
                    <img src={LeftUpArrow} alt="" />
                  </div>
                </div>
                <p className="text-[20px] my-10">
                  Learn how Solana works and get a high-level understanding of
                  Solana's architecture.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex border-b py-6 gap-5 lg:gap-36   ">
                  <h2 className="text-[32px] truncate ">Metaplex Docs</h2>
                  <div className="flex gap-2 border-2 items-center rounded-full  px-6">
                    <button className="truncate" >VIEW ALL</button>
                    <img src={LeftUpArrow} alt="" />
                  </div>
                </div>
                <p className="text-[20px] my-10">
                  Learn what you build with Metaplex, make the process of
                  creating and launching NFTs easier.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center lg:flex-row  lg:justify-between items-center gap-20 mt-20">
              <div className="flex flex-col  lg:w-1/2">
                <h2 className="text-[39px]">Solana Changelog</h2>
                <p className="text-[20px] my-4 mr-4">
                  Some more Solana changes from Jacob & Joe. Subscribe to the
                  newsletter: https://solana.us17.list-manage.com/s... Proposal
                  - Priced Compute Units: ...
                </p>
                <button className="border-2 px-6 py-2 rounded-full mt-6 max-w-[200px]">
                  LATEST EPISODE
                </button>
              </div>
              <div>
                <img src={ChangeLog} alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center lg:flex-row gap-6 mt-36">
              <div className="flex flex-col min-w-[300px] bg-[#e5e7eb] dark:bg-[#19161C] p-5 sm:p-10  lg:w-1/2">
                <h2 className="text-[36px]">Solana Developer Update</h2>
                <p className="text-[17px] my-10 text-[#C4C4C4]">
                  Sign up to the newsletter and learn about new resources, new
                  commits, new proposals, and more.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between  rounded-md sm:rounded-full bg-[white] dark:bg-[black] truncate">
                  <input
                    type="email "
                    placeholder="Email"
                    className="bg-[white] dark:bg-[black] px-6 sm:py-4 rounded-md sm:rounded-full"
                  />
                  <button className="px-6 bg-[#14F195] rounded-md sm:rounded-full m-2">
                    SIGN UP
                  </button>
                </div>
              </div>
              <div className="flex flex-col min-w-[300px]  bg-[#e5e7eb] dark:bg-[#19161C] p-5 sm:p-10 w-full lg:w-1/2">
                <h2 className="text-[36px]">Even more resources</h2>
                <p className="text-[17px] my-10 text-[#C4C4C4]">
                  More videos, more episodes. Discussions between industry
                  leaders in both blockchain and technology, our team, and
                  community developers.
                </p>
                <div className="flex flex-col items-center lg:flex-row gap-5 lg:justify-between   ">
                  <div className="flex items-center gap-4 rounded-full border-[1px] border-black dark:border-white px-6 py-2">
                    <button>YOUTUBE</button>
                    <img src={Youtube} alt="" />
                  </div>
                  <div className="flex items-center gap-4 rounded-full border-[1px] border-black dark:border-white px-6 py-2">
                    <button>PODCAST</button>
                    <img src={Podcast} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Build;
