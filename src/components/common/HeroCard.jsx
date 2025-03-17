import { Link } from "react-router";

const HeroCard = () => {
  return (
    <section className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742161399/falf/zztgdke3ka6iil0sid9t.jpg')] min-h-[100vh] bg-center bg-cover">
      <div className="cover hero_cover min-h-[100vh] flex flex-col items-start justify-center md:px-[4rem] px-10">
        <div className="herocard_text flex flex-col items-start justify-center gap-1 max-w-[600px]">
          <p className="text-[#eaa636]">Law & Insurance Specialist</p>
          <p className="text-white  text-[2.5rem] font-bold">Because We Care</p>
          <p className="text-stone-200 leading-8 font-light">
            Providing legal representation and counsel to safeguard your rights.
            Navigate complex legal challenges, and pursue justice with
            unwavering dedication.
          </p>
          <Link
            to={"#"}
            className="bg-[#eaa636] text-[white] uppercase px-8 py-2 rounded-sm font-semibold mt-4"
          >
            explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroCard;
