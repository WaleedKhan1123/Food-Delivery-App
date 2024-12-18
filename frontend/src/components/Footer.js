import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-emerald-500  shadow ">
      <div className="md:w-full md:max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between  space-y-10 ">
          <h3 className="md:flex md:items-center md:mb-4  md:space-x-3 md:rtl:space-x-reverse   flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3146/3146284.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              KHANBITES
            </span>
          </h3>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <Link to="" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2024{" "}
          <Link href="https://flowbite.com/" className="hover:underline">
            KHANBITES™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
