import SecHeading from "./common/SecHeading";
import { motion } from "framer-motion";

const team = [
  {
    name: "Fynley Wilkinson",
    image:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1742308452/1_bud6mr.jpg",
    poistion: "Managing Partner",
  },
  {
    name: "Sasha Welsh",
    image:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1742309722/2_1_reoj06.jpg",
    poistion: "Senior Partner",
  },
  {
    name: "John Shepard",
    image:
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1742309722/3_1_n8wrvz.jpg",
    poistion: "Associate",
  },
];

const Team = () => {
  return (
    <section className="overflow-x-hidden p-8 py-16 flex flex-col gap-8 bg-white team">
      <SecHeading
        subtitle={""}
        maintitle={"our lawyer team"}
        substyle={"text-[#]"}
        mainstyle={"capitalize  "}
        divstyle={"items-center"}
      />
      <div className="team grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5   p-5">
        {team.map((member) => (
          <div
            key={member.name}
            className="team_item flex flex-col items-center gap-2"
          >
            <div className=" max-w-[400px] min-w-[200px] aspect-square  overflow-hidden ">
              <img
                src={member.image}
                alt="lawyer"
                className="w-full h-full  hover:scale-110 ease-in-out duration-700"
              />
            </div>
            <div className="flex flex-col items-center">
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
                className="font-semibold text-[1.2rem]"
              >
                {member.name}
              </motion.p>
              <motion.p
                initial={{ x: 70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                  // duration: 4,
                }}
                viewport={{ once: true }}
                className="text-stone-600 text-[.9rem]"
              >
                {member.poistion}
              </motion.p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
