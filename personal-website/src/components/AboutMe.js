import Title from "./Title"

export default function AboutMe(){
    return(
        <div className="mt-[50vh] h-auto z-20 relative bg-slate-50 pt-10 pb-20" >
            <Title title="About Me"/>
            <div id="content" className="flex flex-row items-center justify-center">
                <div id="WhoAmI" className="flex flex-col items-center justify-center w-1/2 mx-10 self-start">
                    <h2 className="text-3xl font-light text-[#064523] mb-4 my-10 ">Who Am I?</h2>
                    <div>
                        <p className="text-[#393939] text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="text-[#393939] text-lg text-center mt-4">Feel free to also check out my
                            <a href="https://www.linkedin.com/in/angel-vasquez03/" className="text-[#158749] font-semibold" target="_blank"> LinkedIn </a>
                            and my 
                            <a href="https://github.com/AngelASC6/" className="text-[#158749] font-semibold" target="_blank"> Github</a>!</p>
                    </div>
                </div>
                <div id="ImageContainer" className="flex items-center justify-center w-1/2">
                    <img className="w-1/2" src="https://via.placeholder.com/500" alt="Placeholder"/>
                </div>
            </div>
        </div>
    )
}