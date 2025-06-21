import {  useLayoutEffect,  } from "react";
import gsap from "gsap";
import Navbar from "./Navbar";

const Hero = () => {
useLayoutEffect(() => {
  const timeout = setTimeout(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.15,
        ease: "power2.out",
      });
    });

    const smile = gsap.context(() => {
      gsap.from(".smile-image", {
        opacity: 0,
        width: 1000,
        duration: 1.5,
        ease: "power2.out",
      });
    });

   
    return () => {
      ctx.revert();
      smile.revert();
    };
  }, 4100);


  return () => clearTimeout(timeout);
}, []);

  return (
    <>
      <div className="bg-[#EFF5E1] text-[#2D3B36] relative overflow-hidden hero pb-92 md:pb-0">
        <Navbar />
        <div className="flex items-center justify-between p-20 pb-12 ">
<div className=" hero-item w-[80%] md:w-[40%] lg:w-[17rem] absolute top-80 left-10 md:left-10 md:top-70 lg:top-0 lg:relative text-md leading-5">
  <p className=" md:relative md:left-21">Transform your skincare</p>
  Routine with premium products that restore, protect, and enhance
  your natural glow every day.
</div>

          <div className=" hero-item font-[800] relative text-[10vw] sm:text-[8vw] lg:text-7xl lg:pr-18 leading-tight">
            {/* Mobile version (visible only on small screens) */}
            <div className="block leading-14 right-22 text-[4.5rem] z-100 relative  md:top-72  md:text-[10rem] md:left-[-10.3%] lg:z-10 lg:hidden md:leading-28 ">
              GLOWWWW <br />
              <span className="md:text-[8.4rem] ">NATURALLY</span>
            </div>

            {/* Desktop version (visible only on lg and up) */}
            <div className= "  hero-item hidden lg:block">
              GLOW <br />
              NATUR-
              <br />
              ALLY
            </div>
          </div>

          <div>
            <img
              src="/images/Plum.jpg"
              alt="Plum"
              className="object-cover hero-item absolute right-0 top-[71%] z-10 md:h-88 md:w-92 md:top-[16.5%] md:right-9 lg:relative lg:h-44 lg:w-44 lg:rounded-2xl"
            />
          </div>
        </div>

        <div className="overflow-hidden mt-[30%] md:mt-[45%] lg:mt-0 h-[250%]">
          <h1 className="absolute hero-item select-none top-[66.5%] bottom-0 text-[4.8rem] left-[-4%] inset-0 md:top-[90.5%] md:left-[-2.3%] lg:left-0 md:text-[9.5rem] lg:top-[74%]   lg:text-[18rem] font-black text-center text-[#2D3B36] opacity-100 z-0 pointer-events-none leading-none">
            SKINCARE
          </h1>
          <div className="flex relative md:items-end  md:justify-start md:pl-12 pb-12  lg:pb-0 lg:pl-0 lg:justify-center  md:top-8 z-10">
            <img
              src="/images/smile.png"
              alt="Smile"
              className="object-cover smile-image select-none md:h-118 md:w-104 lg:w-fit  lg:h-130  lg:rounded-2xl"
            />
          </div>
          <div className="absolute hero-item bottom-120 left-9 w-[85%] md:w-[45%] md:bottom-20 md:left-[10%] lg:w-[25%] lg:bottom-[4%] z-20 lg:left-[38%] flex items-center gap-4 bg-[#E6E9D4] text-[#2D3B36] rounded-full px-3 py-2">
            <div className="border-dotted border-[2px] border-[#2D3B36] rounded-full p-0.5 shrink-0">
              <img
                src="/images/Plum.jpg"
                alt="Plus"
                className="w-[65px] h-[60px] object-cover rounded-full"
              />
            </div>
            <span className="text-sm font-[400] leading-tight break-words">
              While giving you an invigorating cleansing experience.
            </span>
          </div>

          <button className="bg-[#2D3B36] hidden md:block w-34 h-11 md:relative md:bottom-72 md:left-[78%] lg:bottom-74 lg:left-18 text-sm font-extralight text-[#FEFFF4] rounded-full">
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
