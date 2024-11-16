import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />

      <Cards />
      <Cards />
      <Cards />

      <Footer />
    </div>
  );
};

export default Home;
