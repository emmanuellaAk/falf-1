import SecHeading from "./SecHeading";

const PageHead = ({ bg, pageTitile }) => {
  return (
    <section className={`pagehead min-h-[60vh] ${bg} bg-center bg-cover`}>
      <div className="cover min-h-[70vh] flex flex-col items-center justify-center gap-2">
        <SecHeading
          subtitle={""}
          maintitle={pageTitile}
          substyle={"text-[#]"}
          mainstyle={"text-[2.7rem]"}
          divstyle={"flex flex-col items-center gap-0"}
        />
        <p className="text-stone-200">Reputation. Respect. Result.</p>
      </div>
    </section>
  );
};

export default PageHead;
