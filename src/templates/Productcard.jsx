import React from 'react'

function Productcard({product,index}) {
    const CartIcon = () => (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
      >
        <path
          d="M1.5 1.75L1.83114 1.86037C3.48119 2.4104 4.30621 2.6854 4.7781 3.34012C5.25 3.99484 5.25 4.86449 5.25 6.6038V9.875C5.25 13.4105 5.25 15.1782 6.34835 16.2766C7.4467 17.375 9.21446 17.375 12.75 17.375H22.75"
          stroke="#2D3B36"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          opacity="0.5"
          d="M8.375 20.5C9.41054 20.5 10.25 21.3395 10.25 22.375C10.25 23.4105 9.41054 24.25 8.375 24.25C7.33946 24.25 6.5 23.4105 6.5 22.375C6.5 21.3395 7.33946 20.5 8.375 20.5Z"
          stroke="#2D3B36"
          strokeWidth="2"
        />
        <path
          opacity="0.5"
          d="M19.625 20.5C20.6605 20.5 21.5 21.3394 21.5 22.375C21.5 23.4105 20.6605 24.25 19.625 24.25C18.5895 24.25 17.75 23.4105 17.75 22.375C17.75 21.3394 18.5895 20.5 19.625 20.5Z"
          stroke="#2D3B36"
          strokeWidth="2"
        />
        <path
          d="M5.25 5.5H19.563C22.1317 5.5 23.416 5.5 23.9719 6.34283C24.5276 7.18566 24.0216 8.36617 23.0097 10.7272L22.474 11.9772C22.0016 13.0795 21.7654 13.6306 21.2957 13.9404C20.8261 14.25 20.2265 14.25 19.0272 14.25H5.25"
          stroke="#2D3B36"
          strokeWidth="2"
        />
      </svg>
    );
  return (
    <>
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-md relative flex-shrink-0 md:w-[450px]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />

            <div className="absolute bottom-4 left-4 right-4 bg-[#F3F4E3] rounded-xl flex items-center justify-between p-3">
              <div>
                <h3 className="text-sm font-semibold text-[#2D3B36]  mb-1 uppercase">
                  {product.title}
                </h3>
                <p className="text-xs text-[#2D3B36]  opacity-80">
                  FROM {product.price}
                </p>
              </div>
              <button className="p-2 bg-[#E6E9D4] rounded-lg">
                <CartIcon />
              </button>
            </div>
          </div>
        </>
  )
}

export default Productcard