import { FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between items-center p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">
          Portfolio<span className="text-purple-600 text-6xl">.</span>
        </h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="#" className="hover:text-purple-600 duration-200">
            <FaGithubSquare />
          </a>
          <a href="#" className="hover:text-purple-600 duration-200">
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2024 KishanPandit</p>
    </div>
  );
};

export default Footer;
