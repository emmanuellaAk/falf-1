const SecHeading = ({ subtitle, maintitle, substyle, mainstyle, divstyle }) => {
  return (
    <div className={`${divstyle} flex flex-col gap-0`}>
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
    </div>
  );
};

export default SecHeading;
