import Logo from '../assets/icons/logo.svg'
import FooterIcon from '../assets/icons/footericons.svg'
import EN from "../assets/icons/En.svg"
const Footer=()=>{
    return(
        <>
      <section className=" relative text-[#848895] py-20 z-10 mt-20">
        <div className='border-t pt-20 border-t-[#141414]'>
        <div className="flex flex-col itmes-center lg:flex-row  lg:justify-evenly">
            <div className="flex flex-col items-start mx-10">
                <img src={Logo} alt="" className='h-[30px]' />
                <p className='text-[16px] my-4 text-black dark:text-[white]'>Managed by Solana Foundation</p>
                <img src={FooterIcon} alt="" />
                <p className='my-4'>&copy; 2023 Solana Foundation. All rights reserved.</p>    
            </div>

            <div className='flex flex-wrap gap-20'>
                <div className='flex flex-col items-start mx-10 space-y-2'>
                    <p className=' text-black dark:text-[white] text-[16px]'>SOLANA</p>
                    <p>Grants</p>
                    <p>Break Solana</p>
                    <p>Media Kit</p>
                    <p>Careers</p>
                    <p>Disclaimer</p>

                </div>
                <div className='flex flex-col items-start space-y-2 mx-10'>
                    <p className='text-black dark:text-[white] text-[16px] '>GET CONNECTED</p>
                    <p>Ecosystem</p>
                    <p>Blog</p>
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
