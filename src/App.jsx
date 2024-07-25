import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Build from "./pages/build/page";
import Home from "./pages/home/page";
import PageNotFound from "./pages/pageNotFound/page";
import { DarkModeProvider } from "./context/Darkmode";
import Layout from "./Layout";
import Services from "./pages/services/page";
import Portfolio from "./pages/portfolio/page";
import Blogs from "./pages/blogs/page";
import Career from "./pages/career/page";
import ContactUs from "./pages/contactUs/page";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/build" element={<Build />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blogs />} />
              <Route path="/career" element={<Career/>} />
              <Route path="/contact-us" element={<ContactUs/>} />
              <Route path="*" element={<PageNotFound />} />

            </Route>
          </Routes>
        </Router>
      </DarkModeProvider>
    </>
  );
}

export default App;
