import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  useLayoutEffect(() => {
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.from(".nav-item", {
          opacity: 0,
          y: -50,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
        });
      });

      return () => ctx.revert();
    }, 4400);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex overflow-hidden  items-center h-4 py-14 pb-9 lg:py-9 justify-between px-10 lg:px-24 text-[#2D3B36] navbar ">
      <div>
        <h1 className=" text-2xl lg:text-xl font-[1000] nav-item pr-4 lg:pr-0">
          SKINCARE
        </h1>
      </div>

      <div className="hidden md:flex md:gap-6 lg:gap-10 px-5 lg:px-0">
        <Link to="/all-products" className="nav-item">
          AllProducts
        </Link>
        <Link to="/serum" className="nav-item">
          Serum
        </Link>
        <Link to="/sunscreen" className="nav-item">
          Sunscreen
        </Link>
        <Link to="/bundle" className="nav-item">
          Bundle
        </Link>
      </div>

      <div className="flex items-center gap-1 lg:gap-2  ">
        <div className="flex items-center gap-1  ">
          <span className="bg-[#FEFFF4] p-2  rounded-full nav-item">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.16191 9.02425C1.60955 6.78608 1.83336 5.66697 2.57292 4.94619C2.70961 4.81297 2.85749 4.69175 3.01492 4.58384C3.86674 4 5.00801 4 7.29054 4H8.70962C10.9922 4 12.1335 4 12.9853 4.58384C13.1427 4.69175 13.2905 4.81297 13.4273 4.94619C14.1668 5.66697 14.3906 6.78608 14.8383 9.02425C15.481 12.2376 15.8023 13.8442 15.0625 14.9827C14.9286 15.1889 14.7723 15.3796 14.5965 15.5513C13.6251 16.5 11.9866 16.5 8.70962 16.5H7.29054C4.01356 16.5 2.37507 16.5 1.40376 15.5513C1.22789 15.3796 1.07156 15.1889 0.937622 14.9827C0.197906 13.8442 0.519239 12.2376 1.16191 9.02425Z"
                stroke="#2D3B36"
              />
              <path
                opacity="0.5"
                d="M10.5 7.33317C10.9602 7.33317 11.3333 6.96007 11.3333 6.49984C11.3333 6.0396 10.9602 5.6665 10.5 5.6665C10.0397 5.6665 9.66663 6.0396 9.66663 6.49984C9.66663 6.96007 10.0397 7.33317 10.5 7.33317Z"
                fill="#2D3B36"
              />
              <path
                opacity="0.5"
                d="M5.49996 7.33317C5.9602 7.33317 6.33329 6.96007 6.33329 6.49984C6.33329 6.0396 5.9602 5.6665 5.49996 5.6665C5.03972 5.6665 4.66663 6.0396 4.66663 6.49984C4.66663 6.96007 5.03972 7.33317 5.49996 7.33317Z"
                fill="#2D3B36"
              />
              <path
                opacity="0.5"
                d="M5.5 3.99984V3.1665C5.5 1.7858 6.61925 0.666504 8 0.666504C9.38075 0.666504 10.5 1.7858 10.5 3.1665V3.99984"
                stroke="#2D3B36"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="font-semibold hidden lg:inline navbar-cart nav-item">
            Cart (1)
          </span>
        </div>
        <span className=" bg-[#FEFFF4] p-2 rounded-full nav-item">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00008 2.58374C5.25021 -1.31223 0.666748 1.56168 0.666748 5.61413C0.666748 9.66654 4.01627 11.826 6.46819 13.759C7.33341 14.441 8.16675 15.0832 9.00008 15.0832"
              stroke="#1C274C"
              stroke-linecap="round"
            />
            <path
              opacity="0.5"
              d="M9 2.58374C12.7498 -1.31223 17.3333 1.56168 17.3333 5.61413C17.3333 9.66654 13.9838 11.826 11.5319 13.759C10.6667 14.441 9.83333 15.0832 9 15.0832"
              stroke="#1C274C"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span className="bg-[#FEFFF4] p-2 rounded-full nav-item">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9056 14.6408C14.6704 12.5064 12.7314 11.0087 10.4782 10.3736C11.5737 9.8168 12.4496 8.9072 12.9649 7.79162C13.4801 6.67604 13.6047 5.41942 13.3184 4.22441C13.0321 3.0294 12.3516 1.96563 11.3868 1.20464C10.422 0.443645 9.2289 0.0297852 8.0001 0.0297852C6.77129 0.0297852 5.57827 0.443645 4.61343 1.20464C3.64859 1.96563 2.96816 3.0294 2.68186 4.22441C2.39557 5.41942 2.52009 6.67604 3.03534 7.79162C3.5506 8.9072 4.42657 9.8168 5.52199 10.3736C3.26887 11.008 1.3298 12.5056 0.0946505 14.6408C0.0607305 14.6941 0.0379604 14.7538 0.0277004 14.8162C0.0174404 14.8786 0.0199004 14.9424 0.0349404 15.0038C0.0499804 15.0652 0.0772905 15.1229 0.115221 15.1735C0.153151 15.2241 0.20092 15.2664 0.25565 15.2981C0.31038 15.3297 0.370951 15.35 0.433711 15.3576C0.496471 15.3652 0.56012 15.36 0.62084 15.3424C0.681551 15.3248 0.73808 15.2951 0.78701 15.2551C0.83595 15.2151 0.87628 15.1655 0.90559 15.1095C2.40637 12.5166 5.05793 10.9689 8.0001 10.9689C10.9423 10.9689 13.5939 12.5166 15.0946 15.1095C15.124 15.1655 15.1643 15.2151 15.2132 15.2551C15.2622 15.2951 15.3187 15.3248 15.3794 15.3424C15.4401 15.36 15.5038 15.3652 15.5665 15.3576C15.6293 15.35 15.6898 15.3297 15.7446 15.2981C15.7993 15.2664 15.8471 15.2241 15.885 15.1735C15.9229 15.1229 15.9502 15.0652 15.9653 15.0038C15.9803 14.9424 15.9828 14.8786 15.9725 14.8162C15.9623 14.7538 15.9395 14.6941 15.9056 14.6408ZM3.46887 5.50015C3.46887 4.60395 3.73462 3.72788 4.23252 2.98272C4.73042 2.23756 5.4381 1.65678 6.26608 1.31382C7.09406 0.970855 8.0051 0.881125 8.8841 1.05597C9.7631 1.2308 10.5705 1.66236 11.2042 2.29607C11.8379 2.92978 12.2695 3.73717 12.4443 4.61615C12.6191 5.49512 12.5294 6.40621 12.1864 7.23418C11.8435 8.0622 11.2627 8.7698 10.5175 9.2677C9.7724 9.7656 8.8963 10.0314 8.0001 10.0314C6.7988 10.03 5.6471 9.55209 4.79764 8.70259C3.94818 7.85316 3.47031 6.70147 3.46887 5.50015Z"
              fill="#2D3B36"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
