import Title from "../Title";
import headshot from "../../assets/Spring_2025_CareerFairHeadshots_373-2.jpg"; // Import the image

export default function AboutMe() {
  return (
    <div
      id="about"
      className="md:h-screen h-auto z-20 relative bg-snow pt-10 pb-20"
    >
      <Title title="About Me" />
      <div
        id="content"
        className="flex flex-col md:flex-row items-center justify-center"
      >
        <div
          id="WhoAmI"
          className="flex flex-col items-center justify-center w-full md:w-1/2 mx-2 md:mx-10 md:p-0 p-10 self-start md:pt-12"
        >
          <div>
            <p className="text-[#393939] text-lg text-center">
              Hi, I’m Angel — a software engineering student at Rochester
              Institute of Technology, graduating in May 2026. I’m passionate
              about building things that are both functional and user-friendly,
              whether that’s a polished front-end interface, a well-structured
              API, or a fully deployed cloud application.
              <br />
              <br />
              Professionally, I’ve had the opportunity to work in both corporate
              and academic settings — developing a full-stack application during
              my summer co-op at RIT, implementing and developing process
              automations at Wegmans, and even applying machine learning at
              JPMorgan Chase. These experiences have taught me not just how to
              code, but how to collaborate, adapt, and deliver results in
              different environments.
              <br />
              <br />
              Right now, I’m searching for full time Software Engineering
              opportunities for after I graduate in the Spring. If you’re
              looking for someone with a strong technical and process background and a
              passion for design, feel free to get in touch. I’d love to connect
              and discuss potential opportunities.
            </p>
            <p className="text-[#393939] text-lg text-center mt-4">
              Feel free to also check out my
              <a
                href="https://www.linkedin.com/in/angel-vasquez03/"
                className="hover:text-racing-green text-[#158749] font-semibold"
                target="_blank"
              >
                {" "}
                LinkedIn{" "}
              </a>
              and my
              <a
                href="https://github.com/AngelASC6/"
                className="hover:text-racing-green text-[#158749] font-semibold"
                target="_blank"
              >
                {" "}
                Github
              </a>
              !
            </p>
          </div>
        </div>
        <div
          id="ImageContainer"
          className="flex items-center justify-center w-full md:w-1/2 mt-8 md:mt-0"
        >
          <img
            className="w-2/3 md:w-1/2 border-2"
            src={headshot}
            alt="Headshot of Angel Vasquez"
          />
        </div>
      </div>
    </div>
  );
}
