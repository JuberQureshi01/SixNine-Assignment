import React, { useLayoutEffect, useRef, useState } from "react";
import Productcard from "../templates/Productcard";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"];
const products = [
  {
    title: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: "/images/Alyaskin.jpg",
  },
  {
    title: "RITUAL OF SAKURA.",
    price: "$27.99",
    image: "/images/RituaofSakura.jpg",
  },
  {
    title: "THE BODY LOTION.",
    price: "$19.99",
    image: "/images/ThebodyLotion.jpg",
  },
];

export default function ShowcaseSection() {
  const scrollRef = useRef(null);

  const sectionRef = useRef();

 useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const items = sectionRef.current.querySelectorAll(".item");

    gsap.from(items, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
      opacity: 0,
      y: 60,
      stagger: 0.1,
      duration: 1,
      ease: "power2.out",
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 550;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const [active, setActive] = useState("NEW ARRIVAL");

  return (
    <div
      ref={sectionRef}
      className="bg-[#FEFFF4] text-[#2D3B36] px-4  md:py-20 md:px-16 lg:text-center"
    >
      <h2 className="  item text-4xl md:text-5xl  text-[#2D3B36] mb-8">
        Feel Beautiful Inside and Out <br className=" hidden lg:block" /> with
        Every Product.
      </h2>
      <div className="w-full ">
        <div className="flex item flex-wrap md:flex-nowrap gap-4 justify-start  lg:justify-center lg:px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={` flex-shrink-0 px-6 py-2 rounded-full border whitespace-nowrap transition md:text-base
          ${
            active === cat
              ? "bg-[#2D3B36] text-white"
              : "bg-transparent text-[#2D3B36] border-[#2D3B36]"
          }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex item gap-6 overflow-x-hidden scroll-smooth scrollbar-hide py-10 md:py-20"
      >
        {products.map((product, index) => (
          <Productcard key={index} product={product} />
        ))}
      </div>
      <div className="flex item lg:hidden justify-center gap-8 md:mt-6">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full outline-none flex items-center justify-center border border-[#2D3B36]"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 79.5C61.8152 79.5 79.5 61.8152 79.5 40C79.5 18.1848 61.8152 0.5 40 0.5C18.1848 0.5 0.5 18.1848 0.5 40C0.5 61.8152 18.1848 79.5 40 79.5Z"
              stroke="#2D3B36"
            />
            <path
              d="M39.2929 39.2931C38.9024 39.6836 38.9024 40.3168 39.2929 40.7073L45.6569 47.0713C46.0474 47.4618 46.6805 47.4618 47.0711 47.0713C47.4616 46.6807 47.4616 46.0476 47.0711 45.6571L41.4142 40.0002L47.0711 34.3433C47.4616 33.9528 47.4616 33.3197 47.0711 32.9291C46.6805 32.5386 46.0474 32.5386 45.6569 32.9291L39.2929 39.2931ZM40 40.0002V41.0002H80V40.0002V39.0002H40V40.0002Z"
              fill="#2D3B36"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full bg-[#2D3B36] text-white flex items-center justify-center"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
              fill="#2D3B36"
            />
            <path
              d="M1 39.0002H0L1.74846e-07 41.0002H1V39.0002ZM41.7071 40.7073C42.0976 40.3168 42.0976 39.6836 41.7071 39.2931L35.3431 32.9291C34.9526 32.5386 34.3195 32.5386 33.9289 32.9291C33.5384 33.3197 33.5384 33.9528 33.9289 34.3433L39.5858 40.0002L33.9289 45.6571C33.5384 46.0476 33.5384 46.6807 33.9289 47.0713C34.3195 47.4618 34.9526 47.4618 35.3431 47.0713L41.7071 40.7073ZM1 40.0002V41.0002H41V40.0002V39.0002H1V40.0002Z"
              fill="#FEFFF4"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
