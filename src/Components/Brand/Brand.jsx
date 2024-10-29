import React from "react";

const Brand = () => {
  return (
    <div className="bg-[#0b0121]">
      <div>
        <h2 className="text-[#ceccd3] text-center text-lg">
          Trusted by teams at over <span className="text-white">1,000</span> of
          the world's leading organizations
        </h2>
        <div className="flex lg:flex-row flex-wrap justify-center items-center gap-10 mt-2">
          <img src="/dell.png" alt="" className="w-[60px]" />
          <img src="/zen.png" alt="" className="w-[60px]" />
          <img src="/rakuten.png" alt="" className="w-[60px]" />
          <img src="/pacific.png" alt="" className="w-[60px]" />
          <img src="/ncr.png" alt="" className="w-[60px]" />
          <img src="/Lattic.png" alt="" className="w-[60px]" />
          <img src="/ted.png" alt="" className="w-[60px]" />
        </div>
        <div>
          <div class="lg:relative flex flex-col items-center text-center py-4 lg:py-[60px]">
            <div class="lg:absolute inset-0 flex justify-center items-center">
              <div class="lg:w-[300px] lg:h-[200px] bg-gradient-to-br from-purple-900 to-transparent rounded-full blur-xl opacity-30"></div>
            </div>
            <h1 class="relative text-[20px] lg:text-[45px] text-white lg:leading-[55px] lg:w-[400px]">
              Features that work for your future.
            </h1>
            <p class="relative lg:text-lg text-gray-300 mt-4 lg:w-[500px]">
              Check out our amazing features and experience the power of XFlow
              for yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// dell, zendesk, rakuten, pacific, ncr, lattice, ted
export default Brand;