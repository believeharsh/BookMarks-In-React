import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BMContextProvider from "./BookMark-Context/BMContext-Provider";
// import AllBs from "./Components/AllBMs";
import Navbar from "./Components/Navbar";
import Coding from "./Components/Coding";
import Socials from "./Components/Socials";
import Tools from "./Components/Tools";

function App() {
  return (
    <>
      <Router>
        <BMContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Coding />} />
            <Route path="/coding" element={<Coding />} />

            <Route path="/social" element={<Socials />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </BMContextProvider>
      </Router>
    </>
  );
}

export default App;
