import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Home = () => {
    return (<div  className="">
        <Navbar/> 
        <h1 className=" text-4xl text-center border-4 inline-block  shadow-2xl " >
            Hello World!
    </h1>
     <br/>
     <div className="flex justify-center">
    <button type="button"  className="px-4 py-2 bg-blue-500  text-cyan-50 border rounded font-semibold   bg-blue-500 hover:bg-slate-300 hover:text-black" style={{marginTop:"100px" }} >Click me</button>
    </div>
    <div className="border-4">
        <Footer />
        </div>
    </div>  );
}
 
export default Home;