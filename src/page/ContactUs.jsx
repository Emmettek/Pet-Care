import React from 'react';
import { useTheme } from "../theme/ThemeContext";
const ContactUs = () => {

    const { isDark } = useTheme();
    return (
        <div className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <h1 className="text-4xl font-bold">Welcome Contactus</h1>
        </div>
    );
};

export default ContactUs;
