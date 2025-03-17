import HeroCard from "../components/common/HeroCard";
import WelcomeSec from "../components/WelcomeSec";

const Home = () => {
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
    </section>
  );
};

export default Home;
