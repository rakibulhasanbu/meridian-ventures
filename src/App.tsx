import About from "./components/home/About";
import Banner from "./components/home/Banner";
import GetStarted from "./components/home/GetStarted";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;