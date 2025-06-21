import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "Yes, our products are formulated to be gentle and effective for all skin types, including sensitive skin.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What’s your return policy?",
    answer:
      "You can return any product within 30 days of purchase. No questions asked!",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to over 100 countries worldwide. Shipping charges may apply.",
  },
  {
    question: "How do I choose the right product?",
    answer:
      "Use our product finder tool or contact our support team for personalized recommendations.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
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
        delay: 0.5,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={sectionRef}
      className="bg-[#FEFFF4] py-20 px-4 md:px-16 text-[#2D3B36] grid lg:grid-cols-2 gap-10 items-start"
    >
      {/* Left - Image for lg and md */}
      <div className="relative hidden lg:block">
        <img
          src="/images/ThebodyLotion.jpg"
          alt="Product"
          className="rounded-3xl item w-full object-cover"
        />
        <div className=" item absolute w-[80%] bottom-[6%] left-[10%] flex items-center gap-2 bg-[#E6E9D4] text-[#2D3B36] rounded-full px-3 py-2">
          <div className="border-dotted border-[2px] border-[#2D3B36] rounded-full p-0.5">
            <div className="bg-[#2D3B36] rounded-full w-14 h-14 text-[#E6E9D4] flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3334 19.9043C33.3334 12.6035 27.3739 6.66683 20 6.66683C12.6262 6.66683 6.66671 12.6035 6.66671 19.9043C6.66671 21.8875 6.91102 23.1642 7.21409 24.0977C7.41589 24.719 7.90201 24.1073 8.14117 23.883C9.77787 22.3473 12.3369 22.3838 13.929 23.9658C16.297 26.3185 18.481 29.5818 15.4635 32.5818C13.8435 34.1925 11.4038 34.8623 9.54727 33.1277C7.15064 30.8882 5.06814 28.2822 4.04369 25.127C3.61504 23.8068 3.33337 22.175 3.33337 19.9043C3.33337 10.7425 10.8054 3.3335 20 3.3335C29.1947 3.3335 36.6667 10.7425 36.6667 19.9043C36.6667 22.175 36.385 23.8068 35.9564 25.127C34.9319 28.2822 32.8494 30.8882 30.4529 33.1277C28.5962 34.8623 26.1565 34.1925 24.5365 32.5818C21.519 29.5818 23.703 26.3185 26.071 23.9658C27.6632 22.3838 30.2222 22.3473 31.8589 23.883C32.3209 24.3165 32.5477 24.8317 32.786 24.0977C33.089 23.1642 33.3334 21.8875 33.3334 19.9043Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <span className="text-md font-[400] pl-5">
            24/7 We're Here to Help You
          </span>
        </div>
      </div>

      {/* Right FAQ */}
      <div className="w-full ">
        <div className="pb-6">
          <button className="px-4 py-2 item rounded-full border border-[#2D3B36] text-sm flex items-center gap-2 mb-4">
            <span className="h-3 w-3 bg-[#2D3B36] rounded-full"></span>
            <span className="text-xl">Frequently Asked Question</span>
          </button>
        </div>

        <h2 className="text-4xl item md:text-5xl text-[#2D3B36] mb-6 pb-8">
          Answers to Your <br /> Skincare Questions, All in One Place.
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#2D3B36] item rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left text-[#2D3B36] font-[400]"
              >
                {faq.question}
                <span className="text-4xl font-[200]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-[#2D3B36] opacity-80">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Image below for mobile */}
        <div className="block md:hidden mt-10 relative">
          <img
            src="/images/ThebodyLotion.jpg"
            alt="Product"
            className="rounded-3xl item w-full object-cover"
          />
          <div className="absolute item w-[90%]  bottom-[6%] left-[5%] flex items-center gap-2 bg-[#E6E9D4] text-[#2D3B36] rounded-full px-3 py-2">
            <div className="border-dotted border-[2px] border-[#2D3B36] rounded-full p-0.5">
              <div className="bg-[#2D3B36] rounded-full w-20 md:w-14 h-14 text-[#E6E9D4] flex items-center justify-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.3334 19.9043C33.3334 12.6035 27.3739 6.66683 20 6.66683C12.6262 6.66683 6.66671 12.6035 6.66671 19.9043C6.66671 21.8875 6.91102 23.1642 7.21409 24.0977C7.41589 24.719 7.90201 24.1073 8.14117 23.883C9.77787 22.3473 12.3369 22.3838 13.929 23.9658C16.297 26.3185 18.481 29.5818 15.4635 32.5818C13.8435 34.1925 11.4038 34.8623 9.54727 33.1277C7.15064 30.8882 5.06814 28.2822 4.04369 25.127C3.61504 23.8068 3.33337 22.175 3.33337 19.9043C3.33337 10.7425 10.8054 3.3335 20 3.3335C29.1947 3.3335 36.6667 10.7425 36.6667 19.9043C36.6667 22.175 36.385 23.8068 35.9564 25.127C34.9319 28.2822 32.8494 30.8882 30.4529 33.1277C28.5962 34.8623 26.1565 34.1925 24.5365 32.5818C21.519 29.5818 23.703 26.3185 26.071 23.9658C27.6632 22.3838 30.2222 22.3473 31.8589 23.883C32.3209 24.3165 32.5477 24.8317 32.786 24.0977C33.089 23.1642 33.3334 21.8875 33.3334 19.9043Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <span className="text-md font-[400] pl-5">
              24/7 We're Here to Help You
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
