import { useEffect } from "react";
import { useTheme } from "../theme/ThemeContext";


const Home = () => {
    const { isDark } = useTheme();

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);
    return (
        // <div className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
        //     <h1 className="text-4xl font-bold">Welcome Home</h1>
        // </div>
        <div className={`relative overflow-hidden bg-color-bg transition-colors duration-300 dark:bg-color-bg`}>
            {/* Left Background Shape (now bigger and responsive) */}


            {/* Main Content */}
            <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 gap-10">
                {/* Left Content */}
                <div className="max-w-xl text-center md:text-left  ">
                    <h1 className={`text-4xl font-heading  md:text-5xl font-bold text-color-text transition-colors duration-300 dark:text-color-text`}>
                        Furtastic Finds Await at
                        PetPicks, Your Pets Deserve
                        the Best and So Do You!
                    </h1>
                    <p className={`font-body mt-4 text-md md:text-lg text-color-text transition-colors duration-300 dark:text-color-text`}>
                        Track your pet’s health, food, medications, and more — all in one place.

                    </p>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className={`font-body bg-color-accent text-white px-6 py-3 rounded-full font-semibold  transition-colors duration-300  dark:bg-color-accent  `}>
                            Track My Pet
                        </button>
                        {/* <button className="text-blue-500 underline ">Learn More</button> */}
                    </div>
                </div>

                {/* Right Content - Cat Image */}
                <div className="relative z-30 justify-center items-center flex w-full max-w-md h-96 md:h-[500px]">
                    <div className="absolute">
                        <div className='w-[350px] h-[350px] md:w-[450px] md:h-[450px]  rounded-full transition-colors bg-color-primary  duration-300 dark:bg-color-primary'></div>

                    </div>
                    <img
                        src="http://static.vecteezy.com/system/resources/previews/034/925/406/non_2x/ai-generated-shorthair-cat-on-transparent-background-image-png.png"
                        alt="Orange background with shorthair cat sitting in the middle"
                        className="relative z-20 w-72 md:w-96   transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
            </div>
        </div>


    );
};

export default Home;
