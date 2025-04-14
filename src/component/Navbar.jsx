// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// const Navbar = ({ links }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     return (<>
//         <nav className='bg-blue-600 text-white px-4 py-3 shadow-md'>
//             <div className='max-w-7xl mx-auto flex justify-between items-center'>
//                 {/*Logo */}
//                 <div className="text-xl font-bold">
//                     Pet Care
//                 </div>
//                 {/* Desktop Menu*/}
//                 <ul className='hidden md:flex space-x-4'>
//                     {links.map((link) => (
//                         <li key={link.name}>
//                             <Link to={link.href} className='hover:text-gray-300 transition duration-200'>
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}

//                 </ul>

//                 {/* Hamburger Icon for mobile and tablet*/}

//                 <div className='md:hidden'>
//                     <button
//                         onClick={() => setIsOpen(!isOpen)}
//                         className='focus:outline-none text-2xl'
//                     >
//                         {isOpen ? '✖' : '☰'}
//                     </button>
//                 </div>
//             </div>
//             {/*Mobile Menu */}
//             {isOpen && (
//                 <ul className='md:hidden flex flex-col space-y-2 px-4 pt-2 pb-4'>
//                     {links.map((link) => (
//                         <li key={link.name}>
//                             <Link
//                                 to={link.href}
//                                 onClick={() => setIsOpen(false)} // Close menu on click
//                                 className='block hover:text-gray-300 transition duration-200'
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </nav >
//     </>);

// };

// export default Navbar;

// import React, { useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import { useTheme } from '../theme/ThemeContext';

// const Navbar = ({ links }) => {
//     const { isDark, toggleTheme } = useTheme(); // Function to toggle dark mode   
//     const location = useLocation();
//     const [isOpen, setIsOpen] = useState(false);
//     return (
//         <nav className={`${isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}  bg-gray-800 text-white px-4 py-3 shadow-lg`}>
//             <div className="max-w-7xl mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <div className={` ${isDark ? 'text-white' : 'text-gray-900'} text-xl font-bold `}>
//                     Pet Care
//                 </div>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex space-x-6">
//                     {links.map((link) => (
//                         <li key={link.name}>
//                             <Link
//                                 to={link.href}
//                                 className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition  ${location.pathname === link.href
//                                     ? 'bg-gray-700 text-white'
//                                     : 'text-gray-700 hover:bg-gray-700 hover:text-white'
//                                     }`}
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {/* Theme Toggle Button */}

//                 <div className="justify-between flex items-center space-x-4">

//                     {/* Icon-only toggle for small screens */}
//                     <button
//                         onClick={toggleTheme}
//                         aria-label={`Toggle theme`}
//                         className={` p-2 rounded-full transition duration-300 ease-in-out  ${isDark
//                             ? 'bg-gray-700 text-white hover:bg-gray-600'
//                             : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
//                     >
//                         {isDark ? '🌙' : '☀️'}
//                     </button>


//                     {/* Hamburger Icon for mobile */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className={`text-gray-300 hover:text-white focus:outline-none text-2xl ${isDark ? 'text-white' : 'text-gray-800'}`}
//                         >
//                             {isOpen ? <span>{'\u2A09'}</span> : '☰'}
//                         </button>
//                     </div>
//                 </div>
//             </div>


//             {/* Mobile Menu */}
//             {isOpen && (
//                 <ul className={`md:hidden flex flex-col space-y-1 px-2 pt-2 pb-4 bg-gray-800 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
//                     {links.map((link) => (
//                         <li key={link.name} className=' text-white block rounded-md px-3 py-2 text-base font-medium'>
//                             <Link
//                                 to={link.href}
//                                 onClick={() => setIsOpen(false)}
//                                 className={`block px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md text-base font-medium transition  ${location.pathname === link.href
//                                     ? isDark
//                                         ? 'bg-gray-700 text-white'
//                                         : 'bg-gray-200 text-gray-900'
//                                     : isDark
//                                         ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                                         : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
//                                     }`}
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                     <li className="px-3 pt-2">

//                     </li>
//                 </ul>
//             )}
//         </nav>
//     );
// };

// export default Navbar;;


import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTheme } from '../theme/ThemeContext';

const Navbar = ({ links }) => {
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);
    return (
        <nav className="bg-color-bg text-color-text px-4 py-3 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="font-heading text-xl font-bold text-color-primary dark:text-color-primary">
                    Pet Care
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition
                                    ${location.pathname === link.href
                                        ? 'bg-color-primary text-white'
                                        : 'text-color-text hover:bg-color-primary hover:text-gray-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Theme Toggle + Mobile Menu Button */}
                <div className="justify-between flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="p-2 rounded-full transition duration-300 ease-in-out bg-color-primary  text-white hover:opacity-80"
                    >
                        {isDark ? '🌙' : '☀️'}
                    </button>

                    {/* Hamburger for mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-2xl text-color-text hover:text-color-primary"
                        >
                            {isOpen ? <span>{'\u2A09'}</span> : '☰'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden flex flex-col space-y-1 px-2 pt-2 pb-4 bg-color-bg">
                    {links.map((link) => (
                        <li key={link.name} className="block rounded-md px-3 py-2 text-base font-medium">
                            <Link
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition
                                    ${location.pathname === link.href
                                        ? 'bg-color-primary text-white'
                                        : 'text-color-text hover:bg-color-primary hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
