import { useTheme } from "../theme/ThemeContext";


const Home = () => {
    const { isDark } = useTheme();
    return (
        <div className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <h1 className="text-4xl font-bold">Welcome Home</h1>
        </div>
    );
};

export default Home;
