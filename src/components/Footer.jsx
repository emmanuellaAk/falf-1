import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-router";
import { FaCheck } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const year = new Date().getFullYear();

const footerResources = [
  {
    name: "08 W 36th St, New York, NY 10001",
    icon: <IoLocationOutline />,
    link: "#",
    category: "column-1",
  },
  {
    name: "+1 333 9296",
    icon: <FaPhoneAlt />,
    link: "#",
    category: "column-1",
  },
  {
    name: "contact@example.com",
    icon: <IoMailOutline />,
    link: "#",
    category: "column-1",
  },
  {
    icon: <FaInstagram />,
    link: "#",
    category: "social",
  },
  {
    icon: <FaWhatsapp />,
    link: "#",
    category: "social",
  },
  {
    icon: <FaLinkedinIn />,
    link: "#",
    category: "social",
  },
  {
    name: "Corporate and M&A",
    category: "column-2",
  },
  {
    name: "Construction and Real Estate",
    category: "column-2",
  },
  {
    name: "Commercial Duspute Resolution",
    category: "column-2",
  },
  {
    name: "Employment",
    category: "column-2",
  },
  {
    name: "Banking and Finance",
    category: "column-2",
  },
];

const col1Els = footerResources.filter((item) => item.category === "column-1");
const col2Els = footerResources.filter((item) => item.category === "column-2");
const socials = footerResources.filter((item) => item.category === "social");

const Footer = () => {
  return (
    <footer className=" py-16 pb-10">
      <div className="grid rid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-8">
        <div className="col_1 flex flex-col items-start gap-5">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1742163694/falf/logo-light_lvxecn.png"
            alt="logo"
            className="logo"
          />
          <ul className="flex flex-col gap-2">
            {col1Els.map((resource) => (
              <Link
                to={resource.link}
                target="_blank"
                className="text-white flex items-center gap-2 text-[.9rem]"
              >
                <span className="text-[.9rem] text-[#eaa636]">
                  {resource.icon}
                </span>{" "}
                {resource.name}
              </Link>
            ))}
          </ul>
          <ul className="footer_socials flex items-center gap-2">
            {socials.map((social) => (
              <Link to={"#"} key={social.icon} className="text-white">
                <li
                  key={social.icon}
                  className="bg-[#eaa636] p-3 rounded-sm text-[1.2rem]"
                >
                  {social.icon}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col_2 flex flex-col items-start gap-5">
          <h2 className="text-[#eaa636] font-semibold text-[1.3rem]">
            Practice Areas
          </h2>
          <ul className="flex flex-col gap-2">
            {col2Els.map((resource) => (
              <Link
                to={resource.link}
                target="_blank"
                className="text-white flex items-center gap-2 text-[.9rem]"
              >
                <span className="text-[.8rem] text-[#eaa636]">
                  <FaCheck />
                </span>{" "}
                {resource.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="col_2 flex flex-col items-start gap-5">
          <h2 className="text-[#eaa636] font-semibold text-[1.3rem]">
            Newsletter
          </h2>
          <p className="text-white text-[.9rem] max-w-[500px]">
            Signup for our newsletter to get the latest news, updates and
            special offers in your inbox.
          </p>
          <form className="input_box flex items-stretch gap-0  max-w-[500px] w-full">
            <input
              type="email"
              placeholder="enter your email"
              className="bg-stone-300 w-[80%] py-1 px-4 rounded-l-md focus:outline-0 focus:border-0"
            />
            <button
              type="submit"
              className="bg-[#eaa636] text-[#fff] w-[20%] flex items-center justify-center text-[1.8rem] py-1 rounded-r-md"
            >
              <FaLongArrowAltRight />
            </button>
          </form>
          <p className="text-stone-500 text-[.84rem] font-semibold">
            Your email is safe with us. We don't spam
          </p>
        </div>
      </div>
      <hr className="bg-stone-700 h-[1px] w-full border-0" />
      <p className="text-stone-300 text-center mt-6">
        &copy; Copyright {year} -{" "}
        <a href="#" className="underline underline-offset-2">
          Confetto
        </a>
      </p>
    </footer>
  );
};

export default Footer;
