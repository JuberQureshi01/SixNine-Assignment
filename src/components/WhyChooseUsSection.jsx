import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function WhyChooseUsSection() {
    const sectionRef = useRef();

  const textRef = useRef(null);

useEffect(() => {
   const text = textRef.current;
  if (!text) return;
  const chars = text.innerText.split("");

  text.innerHTML = "";

  const spanElements = chars.map((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.opacity = "0.3";
    span.style.display = "inline-block";
    span.style.whiteSpace = char === " " ? "pre" : "normal";
    return span;
  });

  spanElements.forEach((span) => text.appendChild(span));

  gsap.set(spanElements, { opacity: 0.3 });

  gsap.to(spanElements, {
    opacity: 1,
    stagger: 0.03,
    ease: "power2.out",
    scrollTrigger: {
      trigger: text,
      start: "top 30%",
      end: "bottom top",
      scrub: true,
    },
  });

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);




  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefit-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%", 
        },
        opacity: 0,
        y: 60,
        stagger:0.1,
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div className="bg-[#FEFFF4] text-[#2D3B36] relative top-[-3px]">
      <div className="w-full md:hidden flex items-center justify-center mt-10">
        <button className="bg-[#2D3B36] w-48 h-16  text-[#FEFFF4] rounded-full">
          SHOP NOW
        </button>
      </div>
      <div ref={textRef} className="lg:text-[2.6rem] text-[#2D3B36]  px-4 text-xl md:text-3xl  py-14 md:px-10 lg:p-14  ">
        Experience the ultimate in skincare with our expertly formulated
        products, crafted to nourish, protect, and rejuvenate your skin.
        Combining the finest natural ingredients with advanced science, our
        collection ensures every skin type can achieve a radiant, healthy glow.
        Embrace your beauty with confidence every day. Experience the ultimate
        in skincare with our expertly formulated products, crafted to nourish,
        protect, and rejuvenate your skin.
      </div>
      <div ref={sectionRef} className="min-h-screen   lg:p-14 px-0 p-0 lg:px-16 py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section */}
        <div className="lg:max-w-xl max-w-[90%]">
          <div className="pb-10 benefit-item ">
            <button className="mb-4 px-7 py-3 rounded-full border border-[#2D3B36] text-sm flex items-center gap-2">
              <span className="h-3 w-3 bg-[#2D3B36] rounded-full"></span>
              Why Our Products
            </button>
          </div>

          <h1 className=" benefit-item text-3xl md:text-5xl font-[400]  mb-4">
            YOUR SKIN DESERVES <br className="hidden md:block" /> THE BEST CARE.
          </h1>

          <p className="py-10 mb-8 text-[300] benefit-item ">
            Discover a curated collection of skincare products designed to
            rejuvenate, protect, and pamper your skin. Explore our rage crafted
            with love backed by science, and inspired by nature.
          </p>

          {/* Features */}
          <div className="space-y-6">
            <div className="flex">
              <span class=" text-3xl md:text-5xl font-[400] bg-[linear-gradient(to_top,_#293330_0%,_#FEFFF4_70%,_#293330_100%)] bg-clip-text text-transparent">
                01
              </span>
              <div className="pl-10">
                <h3 className="text-xl font-semibold flex items-center benefit-item ">
                  <span className="text-4xl md:text-5xl font-[400]">
                    Bio Ingredients
                  </span>
                </h3>
                <p className=" text-sm mt-1 md:w-90 py-4 pb-8 benefit-item ">
                  Get naturally beautiful and transform with our bio ingredients
                  creams for healthy, radiant skin.
                </p>
              </div>
            </div>
            <div className="flex">
              <span class=" benefit-item text-3xl md:text-5xl font-[400] bg-[linear-gradient(to_top,_#293330_0%,_#FEFFF4_70%,_#293330_100%)] bg-clip-text text-transparent">
                02
              </span>
              <div className="pl-10">
                <h3 className=" benefit-item text-xl font-semibold flex items-center">
                  <span className="text-[1.80rem] md:text-5xl font-[500]">
                    Everything Natural
                  </span>
                </h3>
                <p className=" benefit-item text-sm mt-1 md:w-90 py-4 pb-8 ">
                  Pure ingredients for pure skin. The Perfect solution for your
                  skin care needs.
                </p>
              </div>
            </div>
            <div className="flex">
              <span class=" benefit-item text-3xl md:text-5xl font-[400] bg-[linear-gradient(to_top,_#293330_0%,_#FEFFF4_70%,_#293330_100%)] bg-clip-text text-transparent">
                03
              </span>
              <div className="pl-10">
                <h3 className="text-xl benefit-item font-semibold flex items-center">
                  <span className="text-4xl md:text-5xl font-[400]">
                    All Handmade
                  </span>
                </h3>
                <p className=" benefit-item text-sm mt-1 md:w-90 py-4 pb-8 ">
                  Made with love and care. Just for you. Give your skin the
                  tender loving care it deserves.
                </p>
              </div>
            </div>
          </div>
        </div>
{/* Right section */}
        <div className="relative md:pt-16 px-0 lg:pt-30 benefit-item ">
          <img
            src="/images/Benefitsofproduct.png"
            alt="Skincare model"
            className="lg:rounded-3xl  w-full lg:w-[40rem] object-cover"
          />
          <div
            className="absolute left-16 benefit-item w-[80%] py-3 bottom-15  -translate-x-1/2 
             lg:left-44 lg:translate-x-0 flex items-center gap-6 lg:gap-3 
             px-6 md:left-32 lg:px-4 lg:pr-11 md:py-3 lg:py-2 bg-[#E6F1D8] rounded-full shadow-md 
             md:w-[60%] lg:w-[60%] max-md:scale-90 max-sm:scale-75 max-md:px-3 max-md:gap-4"
             
          >
            <div
              className="relative w-24 h-14 md:w-24 md:h-24 lg:w-20 lg:h-20 
               flex items-center justify-center rounded-full bg-[#1E2B1F] 
               border-4 border-[#E6F1D8]  "
            >
              <svg
                width="24"
                height="28"
                viewBox="0 0 36 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-[1.5] lg:scale-[1.5] max-md:scale-[0.9]"
              >
                <path
                  d="M1.87451 19.9583V30.3124C1.87451 34.1041 1.87451 34.1041 5.45785 36.5208L15.3121 42.2082C16.7912 43.0624 19.2079 43.0624 20.6871 42.2082L30.5412 36.5208C34.1246 34.1041 34.1246 34.1041 34.1246 30.3124V19.9583C34.1246 16.1667 34.1246 16.1667 30.5412 13.75L20.6871 8.0625C19.2079 7.20833 16.7912 7.20833 15.3121 8.0625L5.45785 13.75C1.87451 16.1667 1.87451 16.1667 1.87451 19.9583Z"
                  stroke="#E6F1D8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M29.4583 12.8957V7.4165C29.4583 3.24984 27.375 1.1665 23.2083 1.1665H12.7916C8.62496 1.1665 6.54163 3.24984 6.54163 7.4165V12.7498"
                  stroke="#E6F1D8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M19.3121 19.896L20.4996 21.7502C20.6871 22.0418 21.1038 22.3335 21.4163 22.4168L23.5413 22.9585C24.8538 23.2918 25.208 24.4168 24.3538 25.4585L22.958 27.146C22.7496 27.4168 22.583 27.896 22.6038 28.2293L22.7288 30.4168C22.8121 31.771 21.8538 32.4585 20.6038 31.9585L18.5621 31.146C18.2496 31.021 17.7288 31.021 17.4163 31.146L15.3746 31.9585C14.1246 32.4585 13.1662 31.7502 13.2496 30.4168L13.3746 28.2293C13.3954 27.896 13.2287 27.396 13.0204 27.146L11.6246 25.4585C10.7704 24.4168 11.1246 23.2918 12.4371 22.9585L14.5621 22.4168C14.8955 22.3335 15.3121 22.021 15.4788 21.7502L16.6663 19.896C17.4163 18.771 18.583 18.771 19.3121 19.896Z"
                  stroke="#E6F1D8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className="text-sm font-[300] md:text-xl text-[#293330] lg:font-medium 
               leading-snug lg:leading-tight max-md:text-sm max-md:leading-normal"
            >
              Best Skin Care Product <br />
              Award Winning
            </div>
          </div>

          <div className="absolute benefit-item bottom-[-2rem] w-full px-6 flex justify-between text-sm ">
            <span>SINCE 2001</span>
            <span className="cursor-pointer lg:underline lg:underline-offset-1">
              LEARN MORE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUsSection;
