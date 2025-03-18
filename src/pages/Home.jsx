import { useState } from "react";
import HeroCard from "../components/common/HeroCard";
import SecHeading from "../components/common/SecHeading";
import WelcomeSec from "../components/WelcomeSec";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import { FaCheck } from "react-icons/fa";

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

const factStats = [
  {
    name: "Homes Protected",
    value: "450+",
  },
  {
    name: "people saved",
    value: "4k+",
  },
  {
    name: "money saved",
    value: "$320k+",
  },
  {
    name: "contracts signed",
    value: "200+",
  },
  {
    name: "countries",
    value: "100+",
  },
  {
    name: "staff members",
    value: "40+",
  },
];

// const practiceValues = [
//   "Corporate and M&A",
//   "Construction and Real Estate",
//   "Commercial Duspute Resolution",
//   "Employment",
//   "Banking and Finance",
//   "Captial Market",
//   "Environmental",
//   "Intellectual Property Right",
//   "Goverment",
//   "Foundation/Non Profit Organization",
//   "Bankcuptcy",
//   "Criminal",
// ];
const values = [
  {
    row1: [
      "Corporate and M&A",
      "Construction and Real Estate",
      "Commercial Duspute Resolution",
      "Employment",
    ],
  },
  {
    row2: [
      "Banking and Finance",
      "Captial Market",
      "Environmental",
      "Intellectual Property Right",
    ],
  },
  {
    row3: [
      "Goverment",
      "Foundation/Non Profit Organization",
      "Bankcuptcy",
      "Criminal",
    ],
  },
];

const Home = () => {
  const [currFilter, setCurrFilter] = useState("our attorneys");
  return (
    <section className="homepage">
      <HeroCard />
      <section className="offer_banner p-8 min-h-[20vh] flex flex-col items-center justify-center bg-[#eaa636] text-stone-100 font-semibold px-8 text-center gap-4 md:flex-row md:text-left md:justify-between md:px-12">
        <p className="text-[1.4rem] max-w-[600px] md:max-w-[700px]">
          Contact Us Now! Get a Free Consultation for Your Case.
        </p>
        <button className="bg-[#1a1a1a] px-9 py-3 font-semibold uppercase tracking-wider text-[.84rem] rounded-sm">
          make appointment
        </button>
      </section>
      <WelcomeSec />
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
              <p className="text-stone-400 font-light leading-8 max-w-[600px]">
                {currFilter === info.name ? info.text : ""}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="practice_areas bg-white p-8 py-26 flex flex-col gap-16">
        <div className="practice_text flex flex-col items-center gap-6">
          <SecHeading
            subtitle={""}
            maintitle={"practice areas"}
            substyle={"text-[#]"}
            mainstyle={"capitalize  "}
            divstyle={"items-center"}
          />
          <p className="text-center max-w-[600px]">
            We're dedicated to offering comprehensive, expert legal services
            tailored to meet your specific needs. Our team of seasoned attorneys
            brings decades of combined experience across a wide array of
            practice areas.
          </p>
        </div>
        <div className="practice_values grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 ">
          <div className="value_row">
            {values[0].row1.map((row1El) => (
              <p className="text-[.88rem] tracking-wide   text-stone-600 flex items-center gap-1 ">
                <span className="bg-[#1a1a1a] text-[#eaa636] p-[.4rem] text-[.9rem] rounded-sm">
                  <FaCheck />
                </span>
                {row1El}
              </p>
            ))}
          </div>
          <div className="value_row">
            {values[1].row2.map((row2El) => (
              <p className="text-[.88rem] tracking-wide   text-stone-600 flex items-center gap-1 ">
                <span className="bg-[#1a1a1a] text-[#eaa636] p-[.4rem] text-[.9rem] rounded-sm">
                  <FaCheck />
                </span>
                {row2El}
              </p>
            ))}
          </div>
          <div className="value_row">
            {values[2].row3.map((row3El) => (
              <p className="text-[.88rem] tracking-wide   text-stone-600 flex items-center gap-1 ">
                <span className="bg-[#1a1a1a] text-[#eaa636] p-[.4rem] text-[.9rem] rounded-sm">
                  <FaCheck />
                </span>
                {row3El}
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="we_did bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742212253/falf/2_1_rffhay.jpg')] bg-center bg-cover">
        <div className="cover p-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12 min-h-[70vh]">
          <div className="we_did_text flex flex-col gap-3 md:w-[30%]">
            <SecHeading
              subtitle={"fun facts"}
              maintitle={"What we did?"}
              substyle={"text-[#]"}
              mainstyle={""}
              divstyle={""}
            />
            <p className="text-stone-200 max-w-[600px]">
              Trust in our expertise and let us champion your legal rights with
              skill and compassion.
            </p>
          </div>
          <div className="we_did_stats grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-3 md:w-[60%]">
            {factStats.map((stat) => (
              <div
                key={stat.name}
                className=" text-white flex flex-col items-start  max-w-[200px]"
              >
                <p className="font-semibold text-[1.7rem]">{stat.value}</p>
                <p className="text-[#eaa636] capitalize">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Team />
      <Testimonials />
    </section>
  );
};

export default Home;
