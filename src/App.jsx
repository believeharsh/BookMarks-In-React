
import BMContextProvider from "./BookMark-Context/BMContext-Provider";
import AllBs from "./Components/AllBMs";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <BMContextProvider>
        <Navbar />
        <AllBs />
      </BMContextProvider>
    </>
  );
}

export default App;
