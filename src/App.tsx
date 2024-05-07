import Banner from "./components/home/Banner";
import GetStarted from "./components/home/GetStarted";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;