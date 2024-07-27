import Gif from "../../assets/images/build.gif";
import Brave from "../../assets/icons/brave.svg";
import Circle from "../../assets/icons/circile.svg";
import Discord from "../../assets/icons/discord.svg";
import Google from "../../assets/icons/google.svg";
import Jump from "../../assets/icons/jump.svg";
import Lalaplaza from "../../assets/icons/lalaplaza.svg";
import MagicEden from "../../assets/icons/magicEden.svg";
import BgWave from "../../assets/images/backgroundwave.png";
import Aboutus from "../../assets/images/aboutus.jpg";
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
import Welcome from "../../assets/videos/welcomevideo.mp4";
import AppDevelopment from "../../assets/icons/appDevelopment.svg";
import WebDevelopment from "../../assets/icons/webDevelopment.svg";
import WebDesign from "../../assets/icons/webDesigner.svg";
import IotDev from "../../assets/icons/creativeServices.svg";
import DigitalMarket from "../../assets/icons/digitalMarketing.svg";
import { useDarkMode } from "../../context/Darkmode";
import { motion } from "framer-motion";
import Testimonial from "../../components/testimonial";
const Home = () => {
  const { isNightMode } = useDarkMode();
  const ourService = [
    {
      icon: AppDevelopment,
      service: "App Development",
      desc: "Craft user-friendly applications with seamless front-end and back-end development, ensuring optimal functionality and design across all devices.",
    },
    {
      icon: WebDevelopment,
      service: "Web Development",
      desc: "Create responsive web applications with seamless front-end and back-end development using modern full-stack frameworks, ensuring user-friendly designs and functionality across all devices.",
    },
    {
      icon: WebDesign,
      service: "Software Development",
      desc: "We specialize in custom website design, ensuring your site reflects your brand identity and business goals while providing responsive design for flawless performance across all devices.",
    },
    {
      icon: IotDev,
      service: "IOT Development",
      desc: "Elevate your brand with custom motion graphics, animated user interfaces, and immersive 3D animations .",
    },
    {
      icon: DigitalMarket,
      service: "Digital market",
      desc: "Enhance your company's online presence with a robust digital marketing strategy, covering SEO, PPC, content, social media, email campaigns, influencers, website optimization, and analytics for improved results.",
    },
  ];

  const works = [
    {
      img: Collage1,
      name: "Project 1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: Collage2,
      name: "Project 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: Collage3,
      name: "Project 3",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: Collage4,
      name: "Project 4",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      img: Collage5,
      name: "Project 5",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return (
    <>
      <section>
        <div className={`relative h-full flex justify-center text-center `}>
          <div
            className={`absolute top-0 h-full w-full bg-no-repeat bg-cover`}
            style={{
              backgroundImage: isNightMode ? `url(${HomePage})` : "none",
            }}
          >
            {" "}
          </div>

          <div className=" flex flex-col items-center lg:flex-row lg:justify-center mx-auto">
            <div className="relative z-10 max-w-full justify-center flex flex-col mx-10  mb-28 mt-10 lg:my-28 order-2 lg:order-1">
              <h1 className="text-[38px] sm:text-[45px] md:text-[60px] lg:text-[70px] my-0  ">
                Innovate. Create. Transform
              </h1>
              <p className="mt-4 sm:mx-24 text-[16px] sm:text-[18px]">
                Your Partner in Web, App, Software, IoT Development & Digital
                Marketing
              </p>
              <div className="mt-6 gap-5 flex flex-col  sm:flex-row justify-center">
                <button className="px-6 py-2 text-[white] dark:text-[black] bg-gradient-to-r from-[#8C01FA] to-black rounded-full ">
                  LEARN MORE
                </button>
                <button className="px-6 py-2 border dark:border-white rounded-full hover:bg-white hover:text-black">
                  BOOK A APPOINMENT
                </button>
              </div>
            </div>
            <div className="relative z-10 mx-10 order-1 lg:order-2">
              <video
                className="w-full lg:w-[600px]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={Welcome} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="relative z-10 flex flex-col items-center  mt-10">
          <div>
            <p className="text-[#618ADC] text-[20px] mx-5  ">
              TRUSTED FROM BRANDS GLOBALLY
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
          style={{
            backgroundImage: isNightMode
              ? `url(${BgWave})`
              : "linear-gradient(to bottom, #99bbff, #e6eeff)",
          }}
        >
          <h1 className="mt-20 text-[48px] mx-20">About us</h1>
          <div className="flex flex-col  lg:flex-row lg:justify-center text-[32px] gap-28 m-5 lg:m-10">
            <div className="flex flex-col items-start lg:w-[80%] mx-10 space-y-4 ">
              <h2 className="mt-20 ">About Finixia Dedecons.</h2>
              <p className="text-[17px]  text-black  dark:text-[#C4C4C4]">
                Finixia Dedecons is a dynamic and innovative technology company
                based in Assam, India. We specialize in providing a
                comprehensive suite of IT and Marketing solutions to businesses
                of all sizes.
              </p>
              <p className="text-[17px]  text-black  dark:text-[#C4C4C4]">
                Being named Northeast India's best tech startup underscores your
                company’s exceptional innovation and significant growth. It
                highlights your standout impact in the region and reflects the
                strong leadership driving your success.
              </p>
              <button className="px-6 py-2 text-[16px] border border-black dark:border-white rounded-full hover:bg-white hover:text-black">
                KNOW MORE
              </button>
            </div>
            <img
              src={Aboutus}
              alt=""
              className=" lg:w-1/2 border-t border-t-[10px] border-l border-l-[10px] rounded border-t-[gray] border-l-[gray]  "
            />
          </div>

          <div className="flex flex-col items-start  py-10  mx-20 space-y-4">
            <h1 className="text-[37px]">Our Services</h1>
            <p className="text-[#618ADC] text-[20px] items-start ">
              The Services we offer{" "}
            </p>
            <p className="text-[17px] text-black  dark:text-[#C4C4C4]">
              We offer a variaty of services to help you to grow and build your
              brand and help you with developing your Products
            </p>
            <div className=" grid grid-col md:grid-cols-2 mx-10 lg:grid-cols-3 justify-center gap-6 lg:mx-44 slideRight py-10 ">
              {ourService.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative  flex flex-col max-w-[480px] max-h-[360px] px-10 justify-center items-center bg-white rounded-lg  p-6 overflow-hidden  h-screen group"
                >
                  <div className="absolute inset-0  bg-[#99bbff] dark:bg-[black] transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0"></div>
                  <img
                    src={item.icon}
                    className="fill-white h-[70px] w-[70px] my-2 p-2 bg-[#2334de] relative bg-white rounded-[50px] relative "
                    alt={item.service}
                  />
                  <h2 className="text-center my-2 text-[30px] font-semibold relative text-black group-hover:text-white ">
                    {item.service}
                  </h2>
                  <p className=" line-clamp-3 text-center my-2 text-[22px] text-[#7A7A7A] relative group-hover:text-white">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            <button className="px-6 py-2 text-[16px] border border-black dark:border-white rounded-full hover:bg-white hover:text-black">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </section>
      <section className=" dark:text-white pt-28 flex flex-col items-center mx-20">
        <div className="flex flex-col justify-center items-center w-full ">
          <h2 className="text-[32px] ">OUR WORK </h2>
          <p className="text-[17px] text-black  dark:text-[#C4C4C4]">
            The work we did that made our Client happy and satisfied
          </p>
          <div className="flex gap-5 flex-wrap justify-center items-center mt-4 text-[white]">
            <p className="bg-[#111111] px-5 py-2 rounded-[16px] border-2 border-[#A962FF]">
              All
            </p>
            <p className="bg-[#111111]  px-5 py-2 rounded-[16px]">E-Commerce</p>
            <p className="bg-[#111111] px-5 py-2 rounded-[16px]">Custom</p>
            <p className="bg-[#111111] px-5 py-2 rounded-[16px]">Marketing</p>
          </div>
          <div className="relative flex gap-10 flex-wrap my-10 justify-center">
            {works.map((item) => (
              <div className="group w-[250px] h-[350px] dark:bg-[#e5e7eb] text-black overflow-hidden rounded-xl shadow-xl relative">
                <img
                  src={item.img}
                  alt=""
                  className="w-[250px] h-[250px] transform transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <p className="text-white text-lg">{item.name}</p>
                </div>
                <p className="mx-4">{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="px-6 py-2 text-[16px] border border-black dark:border-white rounded-full hover:bg-white hover:text-black w-[200px]">
             MORE PROJECTS
          </button>
        </div>
      </section>
      <section className="dark:text-[white] flex flex-col   ">
        <div className="absolute  min-h-screen w-full  dark:bg-black  flex justify-center items-center">
          <img
            src={isNightMode ? Wave : ""}
            alt=""
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="flex flex-col mx-5 px-20 my-20">
          <h1 className=" text-[32px] sm:text-[40px]  my-5 z-10 ">Testomonials</h1>
          <h2 className="text-[17px] text-black  dark:text-[#C4C4C4] z-10 ">
            what our clients say !  You still hesitate about working with Us ? Check what They say about Us
          </h2>
        </div>
        <div>
          <Testimonial/>
        </div>
        {/* <div className="flex  gap-3 w-full relative z-10 ">
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
          </h2> */}
          <button className="px-6 py-2 text-[white] dark:text-[black] bg-gradient-to-r from-[#8C01FA] to-black rounded-full my-4 ">
            START BUILDING
          </button>
        {/* </div> */}
      </section>
    </>
  );
};
export default Home;
