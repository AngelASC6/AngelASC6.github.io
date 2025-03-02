import { Link } from "react-scroll";

import NavOptions from "../navOptions.json";

const navOptions = NavOptions.options;
const socialMedia = NavOptions.socials;

// Edit to allow for tab navigation
export default function Footer(){
    return(
            <footer className="bg-[#2D4137] text-white text-center p-4 grid grid-cols-3 font-['Roboto_Condensed']">
                <div className="col-span-1">
                    <h2 className="text-3xl">Angel Vasquez</h2>
                </div>
                <div className="col-span-1 flex flex-col">
                    <h2 className="text-3xl">Explore</h2>
                    <div className="flex flex-col text-xl">
                        {navOptions.map((option, index) => (
                        <Link
                        key={index}
                        to={option.id || option}
                        offset={-50}
                        smooth duration={1000}
                        className="text-stone-400 hover:text-stone-300 cursor-pointer w-max m-auto">
                        {option.text || option}
                        </Link>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 flex flex-col">
                    <h2 className="text-3xl">Social Media</h2>
                    <div className="flex flex-col text-xl">
                    {socialMedia.map((option, index) => (
                        <a 
                        key={index}
                        href={option.url}
                        target="_blank"
                        className="text-stone-400 hover:text-stone-300 cursor-pointer w-max ml-auto mr-auto" 
                        >{option.name}
                        </a>
                    ))}
                    </div>
                </div>
            </footer>
    );
}