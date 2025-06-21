import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
  const loaderRef = useRef(null);
  const h5Ref = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.from("#line1-part1", {
      duration: 0.6,
      onStart: () => {
        let grow = 0;
        const interval = setInterval(() => {
          if (grow <= 100) {
            if (h5Ref.current) {
              h5Ref.current.textContent = grow;
            }
            grow++;
          } else {
            clearInterval(interval);
          }
        }, 35);
      },
    });

    tl.to(loaderRef.current, {
      duration: 2.4,
      y: -1000,
      delay: 3.2,
      ease: "power3.out",
    });

    tl.set(loaderRef.current, { display: "none" });
  }, []);

  return (
    <div
      id="loader"
      ref={loaderRef}
      className="fixed inset-0 bg-white z-[1000] text-center pt-[100px] text-[#2D3B36]"
    >
      <div id="line1-part1">
        <h5
          ref={h5Ref}
          className="text-9xl absolute bottom-11 right-10"
        >
          00
        </h5>
      </div>
    </div>
  );
}
