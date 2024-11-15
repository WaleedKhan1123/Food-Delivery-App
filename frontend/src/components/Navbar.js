import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    // State for controlling mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        // <nav className="bg-white shadow-md">
        //     <div className="container mx-auto px-4 flex justify-between items-center py-4">
        //         {/* Logo / Brand Name */}
        //         <div className="text-2xl font-bold text-blue-600">
        //             MyBrand
        //         </div>

        //         {/* Navigation Links (Desktop) */}
        //         <div className="hidden md:flex space-x-8 text-gray-700 font-semibold">
        //             <a href="#" className="hover:text-blue-600">Home</a>
        //             <a href="#" className="hover:text-blue-600">About</a>
        //             <a href="#" className="hover:text-blue-600">Services</a>
        //             <a href="#" className="hover:text-blue-600">Contact</a>
        //         </div>

        //         {/* Mobile Menu Button */}
        //         <div className="md:hidden">
        //             <button
        //                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        //                 className="focus:outline-none"
        //             >
        //                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>

        //     {/* Mobile Navigation Links (Conditional Rendering) */}
        //     {isMobileMenuOpen && (
        //         <div className="md:hidden bg-white px-4 pb-4 space-y-2">
        //             <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600">Home</a>
        //             <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600">About</a>
        //             <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600">Services</a>
        //             <a href="#" className="block text-gray-700 font-semibold hover:text-blue-600">Contact</a>
        //         </div>
        //     )}
        // </nav>


        <nav className='bg-white  shadow-md'>
           <div className='container mx-auto px-4 flex justify-between items-center py-4 '>
             <div className='text-2xl text-blue-600 font-bold'>
                KhanBites
             </div>
             <div className='hidden md:flex space-x-16 text-gray-700 font-semibold'>
                <Link to=" " className='hover:text-blue-600'>
                 Home   
                </Link>
                <Link to=" "className='hover:text-blue-500' >
                 Services
                </Link>
                <Link to=" " className='hover:text-blue-500'>
                 About
                </Link>
                <Link to=" " className='hover:text-blue-500'>
                 Contact
                </Link>
             </div>
             <div className=' md:hidden '>

                <button onClick={()=> setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                </button>
             </div>
             
           </div>
           {isMobileMenuOpen &&(

            <div  className='md:hidden bg-white px-4 pb-4 space-y-2 flex items-end flex-col  mx-20 border-4 '>
              <Link to=" " className='block text-gray-700 font-semibold hover:text-blue-600'>
                 Home
                </Link>
                <Link to=" " className='block text-gray-700 font-semibold hover:text-blue-600'>
                 Services
                </Link>
                <Link to=" " className='block text-gray-700 font-semibold hover:text-blue-600'>
                 About
                </Link>
                <Link to=" " className='block text-gray-700 font-semibold hover:text-blue-600'>
                 Contact
                </Link>
            </div>
           )}

         
        </nav>
    );
}

export default Navbar;
