import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);



export default function Footer() {


         const sectionRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%", 
        },
        opacity: 0,
        y: 60,
        delay:0.5,
        duration: 1,
        stagger:0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
<footer ref={sectionRef} className="bg-[#1F2E28]  text-[#E7E8E0] opacity-94 py-16 md:px-16 relative overflow-hidden">
  {/* Background SKINCARE Text */}
  <h1 className="absolute  top-[91%] left-[-6%] z-10 text-[5.1rem] font-[1000] md:text-[10rem]  lg:text-[20rem] md:font-bold opacity-70 text-[#35433E] md:top-[88%] lg:top-[70%] md:left-[-6%]  leading-none select-none">
    SKINCARE
  </h1>

  {/* Top Section */}
  <div className=" item container mx-auto px-5  md:pt-24 pb-32  flex flex-col gap-50 lg:flex-row justify-between items-start ">
    <div>
      <h2 className="text-3xl md:text-5xl font-light leading-snug">
        Join The Skincare <br /> Community Now.
      </h2>
    </div>

    <div>
      <p className=" item text-end md:text-start text-sm md:text-[1.50rem] text-[#E7E8E0] ">Get in Touch</p>
      <p className=" item text-[2.10rem] md:text-5xl font-[300] text-white">contact.skincare.com</p>
    </div>
  </div>

  {/* Bottom Links */}
  <div className="container relative pb-10 md:pb-30 lg:pb-44 pt-14">
    <div className=" absolute gap-44  lg:flex top-[-280%] md:top-[-190%] lg:top-0  lg:gap-80 flex flex-col lg:flex-row justify-between items-center md:gap-88  ">
      <div className=" text-sm md:text-[1.1rem] flex gap-12 md:gap-56 lg:gap-20  text-[#E7E8E0]">
      <Link to="#" className="item" >Juber Qureshi</Link>
      <Link to="#" className="item">Instagram</Link>
      <Link to="#" className="item">YouTube</Link>
    </div>

    <div className="flex  md:text-[1.1rem] text-[0.80rem] gap-12 md:gap-36 lg:gap-20  text-[#E7E8E0]">
      <Link to="#" className="item">Terms of Service</Link>
      <Link to="#" className="item">Privacy Policy</Link>
      <Link to="#" className="item">Cookies Policy</Link>
    </div>
    </div>
  </div>
</footer>

  );
}
