import React from "react";

const OurAnalytics = () => {
  return (
    <div className="bg-[#0b0121] lg:py-10 py-4">
      <div className="shadow-Card container mx-auto rounded-[20px]">
        <div className="lg:py-[70px] py-[30px]">
          <div className="lg:leading-[70px]">
            <h1 className="text-[20px] lg:text-[60px] text-gray-300 text-center font-bold">
              Our powerful analytics
            </h1>
            <h1 className="text-[20px] lg:text-[60px] text-gray-300 text-center font-bold">
              provides invaluable insights
            </h1>
          </div>
          <p className="text-gray-400 lg:w-[700px] text-[20px] mx-auto text-center mt-6">
            Unlock the power of data with our cutting-edge analytics product.
            Get instant insights with our user-friendly. Analytics Dashboard and
            take advantage of our innovative digital credit tokens to reward
            your customers and incentivize engagement.
          </p>
          <div className="text-center mt-6">
            <button className="border-gray-300 text-[18px] px-2 py-1 lg:px-6 lg:py-[10px] text-gray-300 border-[1px] rounded-full">
              Download the app
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurAnalytics;
