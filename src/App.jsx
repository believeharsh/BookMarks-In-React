import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BMContextProvider from "./BookMark-Context/BMContext-Provider";
import AllBs from "./Components/AllBMs";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <>
    
         <BMContextProvider>
            <Navbar/>
           <Routes>
            <Route path='/' element={<Socials/>}/>
            <Route path='/' element={<Coding/>}/>
            <Route path='/' element={<Tools/>}/>
           </Routes>
            <AllBs/>
         </BMContextProvider>
    </>
  );
}

export default App;