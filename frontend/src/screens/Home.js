import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

const Home = () => {
    return (<div  className="">
        <Navbar/> 

    <div className="hidden">
        <br/>
        <h1 className=" grid place-content-center  border-2 " >
            Hello World!
    </h1>

     <br/>
     <div className="flex justify-center">
    <button type="button"  className="px-4 py-2 bg-blue-500  text-cyan-50 border  font-semibold hover:bg-blue-200 active:text-balance active:bg-blue-900 active:text-teal-50 rounded-full ease-in duration-100"  >
    Click me</button>
    </div>
    
     <Cards/>
    <div className="border-4">
        <Footer />
    </div>
    </div>
    </div>  );
}
 
export default Home;