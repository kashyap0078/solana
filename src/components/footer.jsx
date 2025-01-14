import LogoDay from '../assets/images/FNX Logo(light).png'
import LogoNight from '../assets/images/FNX Logo(dark).png'
import FooterIcon from '../assets/icons/footericons.svg'
import EN from "../assets/icons/En.svg"
import { useDarkMode } from "../context/Darkmode";
const Footer=()=>{
    const { isNightMode } = useDarkMode();
    return(
        <>
      <section className=" relative text-[#848895] py-20 z-10 mt-20">
        <div className='border-t pt-20 border-t-[#141414]'>
        <div className="flex flex-col itmes-center lg:flex-row  lg:justify-evenly">
            <div className="flex flex-col items-start mx-10">
                <img src={isNightMode? LogoNight:LogoDay} alt="" className='h-12' />
                <p className='text-[16px] my-4 text-black dark:text-[white]'>Managed by Finixia Foundation</p>
                <img src={FooterIcon} alt="" />
                <p className='my-4'>&copy; 2023 Finixia Foundation. All rights reserved.</p>    
            </div>

            <div className='flex flex-wrap gap-20'>
                <div className='flex flex-col items-start mx-10 space-y-2'>
                    <p className=' text-black dark:text-[white] text-[16px]'>FINIXIA</p>
                    <a href="/">Home</a>
                    <a href="/about-us">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>                   
                    <a href="/career">Careers</a>
                    <a href="contact-us">Contact Us</a>

                </div>
                <div className='flex flex-col items-start space-y-2 mx-10'>
                    <p className='text-black dark:text-[white] text-[16px] '>GET CONNECTED</p>
                    <p>Ecosystem</p>
                    <a href="blog">Blog</a>
                    <p>Newsletter</p>
                </div>
                <div className='flex items-start mx-10 '>
                    <img src={EN} alt="" />
                    <p>En</p>
                </div>
            </div>
        </div>
        </div>
       
      </section>
        </>
    )
}
export default Footer;
