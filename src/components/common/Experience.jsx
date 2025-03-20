import { useState } from "react";
import SecHeading from "./SecHeading";
import { motion } from "framer-motion";

const filters = [
  {
    name: "our attorneys",
    text: "Our attorneys are the cornerstone of our commitment to providing exceptional legal services. Each member of our team brings a wealth of experience, specialized knowledge, and a deep dedication to achieving the best outcomes for our clients. We pride ourselves on our collaborative approach, ensuring that every case benefits from the collective expertise of our diverse legal team.",
  },
  {
    name: "our expertise",
    text: "We brings extensive experience and specialized knowledge to a wide range of legal practice areas. We are dedicated to providing top-tier legal services, tailored to meet the unique needs of each client. Whether you're facing a personal legal challenge or require sophisticated business counsel, our attorneys are here to guide you with unparalleled expertise and unwavering commitment.",
  },
  {
    name: "our firm",
    text: "We are dedicated to providing exceptional legal services tailored to meet the unique needs of our clients. Our firm is built on a foundation of integrity, professionalism, and a commitment to excellence. Whether you're facing a personal legal challenge or require sophisticated business counsel, our team of experienced attorneys is here to guide you through every step of the legal process.",
  },
];

const Experience = () => {
  const [currFilter, setCurrFilter] = useState("our attorneys");
  return (
    <section className="experiences p-8 py-16 flex flex-col gap-5 ">
      <SecHeading
        subtitle={"experiences"}
        maintitle={"Let Our Experience be Your Guide"}
        substyle={"text-[#]"}
        mainstyle={""}
        divstyle={"md:hidden"}
      />
      <div className="experiences_content md:flex md:items-center gap-8 justify-between">
        <div className="imgBox bg-[#fff] md:w-[40%] hidden md:block">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1742247041/falf/9_mxjnwa.jpg"
            alt="attorney"
            className="w-full h-full object-cover object-center md:w-full"
          />
        </div>
        <div className="all_experiences flex flex-col gap-3 mt-4 md:w-[50%]">
          <SecHeading
            subtitle={"experiences"}
            maintitle={"Let Our Experience be Your Guide"}
            substyle={"text-[#]"}
            mainstyle={""}
            divstyle={"hidden md:block mb-8"}
          />
          <div className="filterBtns   gap-x-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filters.map((filter) => (
              <button
                key={filter.name}
                onClick={() => setCurrFilter(filter.name)}
                className={`text-white  py-2 px-4 rounded-sm font-semibold capitalize border-1 border-[#eaa636] cursor-pointer hover:bg-[#eaa636] ease-in-out duration-500  max-w-[300px] ${
                  currFilter === filter.name ? "bg-[#eaa636]" : ""
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          {filters.map((info) => (
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
              className="text-stone-400 font-light leading-8 max-w-[600px]"
            >
              {currFilter === info.name ? info.text : ""}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
