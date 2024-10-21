import { Moon } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo 1.svg'

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);


  return (
    <>
      <nav className="bg-[#207da9] fixed w-[90%] left-1/2 transform -translate-x-1/2 top-5 rounded-3xl z-50">
        <div className="px-5 flex flex-wrap items-center justify-end md:justify-between mx-auto p-3">
          <NavLink to="about" className="lg:w-[15%] absolute md:relative start-3 bg-blue flex items-center space-x-3">
            <img src={logo} alt="IEEE logo" /> 
            <span className='font-uni-sans-heavy text-cyan-50 tracking-wide'>ieee helwan</span>
          </NavLink>



          <div className={`${isNavOpen?"fixed right-0 top-10":"hidden"} md:static md:block md:w-auto" id="navbar-dropdown`}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#207da9] bg-[#207da9]">
              <li>
                <NavLink to="about" className="block py-2 px-3 text-white hover:bg-[#115579] hover:opacity-80 md:hover:bg-transparent opacity-50 md:hover:opacity-85 transition-all duration-300 rounded md:bg-transparent md:p-0" aria-current="page">HOME</NavLink>
              </li>
              
              {/* EVENTS */}
              <li>
                <NavLink to="events" className="block py-2 px-3 text-white opacity-50 rounded hover:bg-[#115579] hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:opacity-85 transition-all duration-300 md:p-0">EVENTS</NavLink>
              </li>
              <li>
                <NavLink to="projects" className="block py-2 px-3 text-white opacity-50 rounded hover:bg-[#115579] hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:opacity-85 transition-all duration-300 md:p-0">PROJECTS</NavLink>
              </li>

              <li ref={dropdownRef}>
                <button
                  id="dropdownNavbarLink"
                  onClick={toggleDropdown} // Toggle dropdown on click
                  className="flex items-center justify-between w-full py-2 px-3 text-white opacity-50 rounded hover:bg-[#115579] hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:opacity-85 transition-all duration-300 md:p-0 md:w-auto"
                >
                  IEEE
                  <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div id="dropdownNavbar" className="z-10 absolute top-full mt-2 font-normal bg-[#207da9] divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-white">
                      <li>
                        <NavLink to="#" className="block px-4 py-2 hover:bg-[#115579] hover:opacity-80">HISTORY</NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="block px-4 py-2 hover:bg-[#115579] hover:opacity-80">GLOBAL</NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="block px-4 py-2 hover:bg-[#115579] hover:opacity-80">SAC</NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="block px-4 py-2 hover:bg-[#115579] hover:opacity-80">MEMBERSHIP</NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </li>


              <li>
                <NavLink to="#" className="block py-2 px-3 text-white opacity-50 rounded hover:bg-[#115579] hover:opacity-80 md:hover:bg-transparent md:border-0 md:hover:opacity-85 transition-all duration-300 md:p-0">CONTACT US</NavLink>
              </li>
            </ul>
          </div>

          <div className="lg:w-[13%] flex justify-end">
            <Moon color='#fff' />
          </div>
          <button
            data-collapse-toggle="navbar-dropdown"
            onClick={()=>{setIsNavOpen(!isNavOpen)}}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#115579] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}
