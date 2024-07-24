import { useNavigate } from "react-router-dom";
import Page404 from "../../assets/images/404page.png"
import Day404 from '../../assets/images/404day.png'
import { useDarkMode } from "../../context/Darkmode";
const PageNotFound =()=>{
    const navigate = useNavigate();
    const { isNightMode,  handleToggle } = useDarkMode();
    return (
        <>
        <section
        className="bg-center bg-cover h-screen dark:text-white flex items-end justify-center"
        style={{ backgroundImage:isNightMode? `url(${Page404})`:`url(${Day404})` }}
      >
        <div className="flex flex-col items-center justify-center space-y-4 mb-28  dark:mb-36">
          <h1 className="text-6xl">OOPS!</h1>
          <p className="text-2xl">Page not found</p>
          <div className="flex gap-4">
            <button className="border-2 border-[gray] rounded-md px-6 py-1" onClick={() => navigate('/')}>GO HOME</button>
            <button className="border-2 border-[gray] rounded-md px-6 py-1" onClick={() => navigate(-1)}>GO BACK</button>
          </div>
        </div>
      </section>
        
        </>
    )
}
export default PageNotFound;