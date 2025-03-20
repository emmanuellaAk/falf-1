import { useState } from "react";
import Experience from "../components/common/Experience";
import PageHead from "../components/common/PageHead";
import SecHeading from "../components/common/SecHeading";
import Team from "../components/Team";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiFist } from "react-icons/gi";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const aboutCards = [
  {
    title: "Request Quote",
    text: "Our experienced attorneys are ready to provide personalized solutions to meet your goals.",
    icon: <FaEnvelopeOpenText />,
  },
  {
    title: "Investigation",
    text: "Our experienced attorneys are ready to provide personalized solutions to meet your goals.",
    icon: <FaSearch />,
  },
  {
    title: "Case Fight",
    text: "Our experienced attorneys are ready to provide personalized solutions to meet your goals.",
    icon: <GiFist className="text-[2.8rem]" />,
  },
];

const About = () => {
  const [cardHover, setCardHover] = useState("");

  return (
    <section className="about">
      <PageHead
        bg={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742332569/subheader3_f6sip3.jpg')]"
        }
        pageTitile={"About Us"}
      />
      <div className="we_are p-8 py-24 flex flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-12 bg-white">
        <div className="weare_text flex flex-col items-start gap-6 md:w-[50%]">
          <SecHeading
            subtitle={"who we are"}
            maintitle={"your partner for legal"}
            substyle={""}
            mainstyle={"capitalize"}
            divstyle={"gap-1"}
          />
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", duration: 1, stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeInOut",
              // duration: 4,
            }}
            viewport={{ once: true }}
            className=" leading-9 font-light"
          >
            Explore innovative strategies, expert guidance, and tailored
            solutions to propel your success forward. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga.
          </motion.p>
        </div>
        <div className="weare_illus  md:w-[50%]">
          <div className="imgBox max-w-[500px] relative">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1742424934/falf/d1_ddlknc.jpg"
              alt="law firm"
              className="w-full h-full rounded-md"
            />
            <div className="case_numbers bg-[#eaa636] w-[40%] absolute top-0 left-[-30px] my-auto bottom-0 h-[40%] flex flex-col items-center justify-center text-white rounded-md">
              <p className="text-[2.6rem] font-bold">
                <CountUp
                  start={0}
                  end={2500}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={2}
                />
              </p>
              <p className="capitalize text-[.9rem]">solved cases</p>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Team />
      <section className="about_exp p-8 py-24 grid grid-cols-1 gap-10 lg:grid-cols-3 max-w-[600px] mx-auto lg:max-w-full lg:w-[85%] ">
        <div className="border border-[#373737] max-w-[500px] mx-auto flex flex-col items-center text-center justify-center min-h-[34vh] px-24 py-12 max-w-full">
          <p className="text-white font-bold text-[10rem]">
            <CountUp
              start={0}
              end={20}
              enableScrollSpy={true}
              scrollSpyOnce={true}
              duration={4}
            />
          </p>
          <p className="text-[#eaa636] uppercase font-semibold tracking-[3px]">
            years of experience
          </p>
        </div>
        <SecHeading
          subtitle={"welcome"}
          maintitle={"Justica is Your Best Partner for Legal Solutions"}
          substyle={""}
          mainstyle={"capitalize max-w-full min-w-full"}
          divstyle={"gap-1  justify-center"}
        />
        <motion.p
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          className="text-stone-200 tracking-wide font-light leading-8  flex items-center"
        >
          We take pride in the depth and breadth of experience that our team of
          lawyers brings to the table. With years of dedicated practice in
          various areas of law, our attorneys have honed their skills, developed
          specialized knowledge, and earned a reputation for excellence in their
          respective fields.
        </motion.p>
      </section>
      <section className="aboutCards p-8 py-24 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aboutCards.map((card) => (
          <div
            className={`card  max-w-[400px] px-6 py-12 flex flex-col items-center justify-center text-center mx-auto min-h-[36vh] gap-3 ease-in-out duration-500 ${
              cardHover === card.title
                ? "bg-[#eaa636] text-white"
                : "bg-[#f8f8f8]"
            }`}
            onMouseOver={() => setCardHover(card.title)}
            onMouseOut={() => setCardHover("")}
            key={card.title}
          >
            <span
              className={` text-[1.8rem] ease-in-out duration-500 ${
                cardHover === card.title ? "text-white" : "text-[#eaa636]"
              }`}
            >
              {card.icon}
            </span>
            <p className="font-semibold text-[1.1rem]">{card.title}</p>
            <p className="text-[.9rem] px-8  font-light">{card.text}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default About;
