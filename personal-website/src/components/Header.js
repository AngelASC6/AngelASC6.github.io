import emoteAngel from '../assets/emote_angel.png';

export default function Header() {
  return (
    <div className="bg-[#99A29E] flex items-center justify-between border border-slate-600 px-4 h-14 fixed top-0 left-0 right-0 z-30">
      {/* Profile Container */}
      <div
        id="profile-container"
        className="p-1 flex items-center"
      >
        <img
          className="rounded-full w-12 border-2 border-black"
          src={emoteAngel}
          alt="Profile"
        />
        <span className="ml-3 text-white text-xl">Angel Vasquez</span>
      </div>

      {/* Nav Options */}
      <div id="nav-options" className="flex space-x-4 p-2 rounded">
        <span className="text-[#393939] cursor-pointer font-semibold">Skills</span>
        <span className="text-[#393939] cursor-pointer font-semibold">About Me</span>
        <span className="text-[#393939] cursor-pointer font-semibold">Experience</span>
        <span className="text-[#393939] cursor-pointer font-semibold">Projects</span>
        <span className="text-[#393939] cursor-pointer font-semibold">Contact</span>
      </div>
    </div>
  );
}
