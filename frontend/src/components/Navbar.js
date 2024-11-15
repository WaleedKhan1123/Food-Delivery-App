import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    // State for controlling mobile menu visibility
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
      <nav className='bg-emerald-500 shadow-md h-14 px-6'>
        <div className='flex'>

        
         <div className='mt-3 ml-6 text-2xl text-white font-bold'>

          
            KHANBITES
         </div>

         <div className='ml-9 mt-4'>

          <Link className='text-white hover:text-cyan-700 transition-all duration-300'>
          Home
          </Link>

          <Link className='ml-7 text-white hover:text-cyan-700 transition-all duration-300'>
          
          Login
          </Link>

         </div>

         </div>

      
      </nav>
    );
}

export default Navbar;
