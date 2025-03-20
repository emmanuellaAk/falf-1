import { motion } from "framer-motion";

const SecHeading = ({ subtitle, maintitle, substyle, mainstyle, divstyle }) => {
  return (
    <motion.div
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
      className={`${divstyle} flex flex-col gap-0`}
    >
      <p
        className={`${substyle} text-[#eaa636] uppercase tracking-[1.6px] font-semibold text-[.9rem]`}
      >
        {subtitle}
      </p>
      <p
        className={`mainheading text-stone-100 text-[1.9rem] font-semibold  ${mainstyle}`}
      >
        {maintitle}
      </p>
      <hr className="bg-[#eaa636] border-none h-[1.4px] max-w-[100px] min-w-[100px] rounded-[4rem] mt-2" />
    </motion.div>
  );
};

export default SecHeading;
