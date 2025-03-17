import { useState } from "react";
import SecHeading from "./common/SecHeading";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router";
import { IoHomeSharp } from "react-icons/io5";
import { GoLaw } from "react-icons/go";

const laws = [
  {
    name: "Business Law",
    icon: <RiTeamFill className="text-[1.5rem]" />,
    desc: "Explore innovative strategies, expert guidance, and tailored solutions to propel your success forward.",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742167308/falf/1_kgh9il.jpg')]",
  },
  {
    name: "Family Law",
    icon: <IoHomeSharp className="text-[1.5rem]" />,
    desc: "Explore innovative strategies, expert guidance, and tailored solutions to propel your success forward.",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742212253/falf/2_1_rffhay.jpg')]",
  },
  {
    name: "Criminal Law",
    icon: <GoLaw className="text-[1.5rem]" />,
    desc: "Explore innovative strategies, expert guidance, and tailored solutions to propel your success forward.",
    link: "#",
    bg: "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742212253/falf/3_zkkypo.jpg')]",
  },
];

const WelcomeSec = () => {
  const [welcomeHover, setWelcomeHover] = useState("");
  return (
    <section className="p-8 py-24 bg-[#1a1a1a] flex flex-col gap-12">
      <div className="welcome_text flex flex-col items-start gap-7 md:flex-row md:gap-10 md:justify-between md:items-center">
        <SecHeading
          subtitle={"Welcome"}
          maintitle={"Reputation. Respect.Result."}
          substyle={"text-[#]"}
          mainstyle={""}
          divstyle={"md:w-[30%]"}
        />
        <p className="text-stone-200 text-[.9rem] leading-8 md:leading-7 font-[300] md:w-[70%]">
          We understand that legal issues can be some of the most challenging
          and stressful experiences in life. Whether you are dealing with a
          complex family matter, facing criminal charges, or navigating the
          intricacies of business law, our mission is to provide you with
          comprehensive, compassionate, and expert legal guidance. Our seasoned
          attorneys are committed to the highest standard of legal
          representation tailored to meet your unique needs.
        </p>
      </div>
      <div className="all_laws grid grid-cols-1 gap-y-5 gap-x-5 md:grid-cols-2 lg:grid-cols-3">
        {laws.map((law) => (
          <div
            className={`law ${law.bg} bg-cover bg-center min-h-[50vh] max-h-[60vh] relative`}
            onMouseOver={() => setWelcomeHover(law.name)}
            onMouseOut={() => setWelcomeHover("")}
            key={law.name}
          >
            <div
              className={` absolute w-full bottom-0 px-6 ease-in-out duration-700 flex flex-col items-start justify-center  pt-16 ${
                welcomeHover === law.name
                  ? "h-[100%] bg-[#000000cc] gap-4 pb-16"
                  : "h-[20%] bg-[#eaa636] gap-0"
              }`}
            >
              <p className="text-[white] font-bold pt-6 text-[1.2rem] flex items-center gap-1">
                {law.icon}
                {law.name}
              </p>
              <p
                className={`text-stone-200 ease-in-out duration-500 font-[200] text-[.9rem] leading-7 delay-200 ${
                  welcomeHover === law.name ? "opacity-100" : "opacity-0"
                }`}
              >
                {law.desc}
              </p>
              <Link
                to={law.link}
                className={`bg-[#eaa636] ease-in-out duration-500 text-[white] px-8 py-2 w-full text-center uppercase text-[.9rem] tracking-wide font-semibold rounded-sm delay-200 ${
                  welcomeHover === law.name ? "opacity-100" : "opacity-0"
                }`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
        {/* <div
          className="law bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742167308/falf/1_kgh9il.jpg')] bg-cover bg-center min-h-[50vh] max-h-[60vh] relative"
          onMouseOver={() => setWelcomeHover(true)}
          onMouseOut={() => setWelcomeHover(false)}
        >
          <div
            className={` absolute w-full bottom-0 px-6 ease-in-out duration-700 flex flex-col items-start justify-center  pt-16 ${
              welcomeHover
                ? "h-[100%] bg-[#000000cc] gap-4 pb-16"
                : "h-[20%] bg-[#eaa636] gap-0"
            }`}
          >
            <p className="text-[white] font-bold pt-6 text-[1.2rem] flex items-center gap-1">
              <RiTeamFill className="text-[1.5rem]" />
              Business Law
            </p>
            <p
              className={`text-stone-200 ease-in-out duration-500 font-[200] text-[.9rem] leading-7 ${
                welcomeHover ? "opacity-100" : "opacity-0"
              }`}
            >
              Explore innovative strategies, expert guidance, and tailored
              solutions to propel your success forward.
            </p>
            <Link
              to={"#"}
              className={`bg-[#eaa636] ease-in-out duration-500 text-[white] px-8 py-2 w-full text-center uppercase text-[.9rem] tracking-wide font-semibold rounded-sm ${
                welcomeHover ? "opacity-100" : "opacity-0"
              }`}
            >
              Read More
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WelcomeSec;
