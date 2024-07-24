import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Build from "./pages/build/page";
import Home from "./pages/home/page";
import PageNotFound from "./pages/pageNotFound/page";
import { DarkModeProvider } from "./context/Darkmode";

function App() {
  return (
    <>
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/build" element={<Build />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </DarkModeProvider>
    </>
  );
}

export default App;
