import SecHeading from "./common/SecHeading";
import { FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Trustworthy Lawyer",
    desc: "From the initial consultation to the final resolution, their professionalism and dedication were evident. They kept me informed every step of the way and fought tirelessly to protect my rights. ",
    position: "John D., Family Law Client",
  },
  {
    name: "Quality lawyer service",
    desc: "Their attention to detail and strategic approach were instrumental in achieving a favorable outcome. I am forever grateful for their hard work and commitment.",
    position: "Maria S., Criminal Defense Client",
  },
  {
    name: "Top lawyer listed",
    desc: "They fought for my right to fair compensation and kept me informed throughout the process. Their expertise in personal injury law made a significant difference in my recovery. ",
    position: "Alex R., Personal Injury Client",
  },
  {
    name: "Great services",
    desc: "They provided clear guidance on complicated issues. Their practical advice and thorough understanding of business law have been invaluable to my company's success.",
    position: "Samantha T., Business Law Client",
  },
  {
    name: "Highly recommend",
    desc: "The attorneys took the time to understand my concerns and crafted a comprehensive plan that gave me peace of mind. Their knowledge and professionalism were excellent. ",
    position: "Edward L., Estate Planning Client",
  },
  {
    name: "Excellent support",
    desc: " They handled the negotiations and litigation with skill and ensured my interests were protected. I was impressed with their responsiveness and dedication to my case. ",
    position: "Linda W., Real Estate Law Client",
  },
];

const Testimonials = () => {
  return (
    <section className="p-8 py-16 bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1742305039/3_yn5jrv.jpg')] bg-center bg-cover flex flex-col gap-8">
      {/* <div className="cover p-8 py-16"> */}
      <SecHeading
        subtitle={""}
        maintitle={"testimonials"}
        substyle={"text-[#]"}
        mainstyle={"uppercase"}
        divstyle={"items-center"}
      />
      <div className="all_testimonials ">
        <Swiper
          //   navigation={true}
          pagination={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            748: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Autoplay, Pagination]}
          className="mySwiper  "
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name} className="">
              <div className="testimonial bg-[#00000065] px-8 py-10 flex flex-col items-start gap-4 rounded-sm hover:bg-[#000000a9] ease-in-out duration-700 max-w-[600px]">
                <span className="text-[#eaa636] text-[3rem] rotate-180">
                  <FaQuoteRight />
                </span>
                <p className="text-white text-[1.3rem] font-semibold">
                  {testimonial.name}
                </p>
                <q className="text-stone-300 font-light text-[.9rem] leading-7">
                  {testimonial.desc}
                </q>
                <p className="text-[#eaa636] text-[.8rem] tracking-wide font-semibold">
                  {testimonial.position}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Testimonials;
