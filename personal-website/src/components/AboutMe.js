import Title from "./Title"
import headshot from "../assets/Spring_2025_CareerFairHeadshots_373-2.jpg"; // Import the image

export default function AboutMe() {
  return (
    <div id="about" className="mt-[45vh] h-auto z-20 relative bg-stone-100 pt-10 pb-20">
      <Title title="About Me" />
      <div id="content" className="flex flex-row items-center justify-center">
        <div id="WhoAmI" className="flex flex-col items-center justify-center w-1/2 mx-10 self-start pt-12">
          <div>
            <p className="text-[#393939] text-lg text-center">
              Hi, I’m Angel, a fourth-year student at RIT majoring in technology and design. I’m passionate about web development and have gained hands-on experience using technologies like React and Tailwind. I also have a strong foundation in cloud computing, having earned my Azure Fundamentals certification, and I'm always looking to deepen my technical expertise through projects and coursework.
              <br /><br />
              In addition to my web development work, I’m focused on creating intuitive user interfaces and exploring ways to integrate APIs into digital experiences. I strive to write clean, efficient code while ensuring the end product is user-friendly and accessible.
              <br /><br />
              Right now, I’m actively seeking a summer internship where I can apply my skills and continue learning in a professional setting. If you’re looking for someone with a strong technical background and a passion for design, feel free to get in touch. I’d love to connect and discuss potential opportunities.
            </p>
            <p className="text-[#393939] text-lg text-center mt-4">
              Feel free to also check out my
              <a href="https://www.linkedin.com/in/angel-vasquez03/" className="text-[#158749] font-semibold" target="_blank"> LinkedIn </a>
              and my
              <a href="https://github.com/AngelASC6/" className="text-[#158749] font-semibold" target="_blank"> Github</a>!
            </p>
          </div>
        </div>
        <div id="ImageContainer" className="flex items-center justify-center w-1/2">
          <img className="w-1/2 border-2" src={headshot} alt="Headshot of Angel Vasquez" />
        </div>
      </div>
    </div>
  );
}