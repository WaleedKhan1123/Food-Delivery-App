import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Carousel />
      <div className="flex flex-col justify-between md:flex-row ">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
