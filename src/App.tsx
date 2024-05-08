import About from "./components/home/About";
import Banner from "./components/home/Banner";
import DiscoverProducts from "./components/home/DiscoverProducts";
import GetStarted from "./components/home/GetStarted";
import Team from "./components/home/Team";
import Works from "./components/home/Works";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <DiscoverProducts />
      <Works />
      <Team />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default App;