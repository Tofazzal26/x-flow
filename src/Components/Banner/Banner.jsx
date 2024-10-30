const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#331788] via-[#160a36] to-[#0b0221]">
      <div className="px-2 lg:px-0">
        <div className="flex justify-center items-center flex-col lg:py-[120px] py-4">
          <button className="text-gray-300 border-[2px] border-gray-500 rounded-full lg:px-6 px-2 text-[14px] lg:text-base py-1 lg:py-2 font-medium">
            We just raised $20M in Series B. Learn more
          </button>
          <div className="text-center lg:leading-[80px] my-4">
            <h2 className="text-[#e8e8e9] text-[30px] lg:text-[80px] font-semibold">
              Modern analytics
            </h2>
            <h2 className="text-[#bcb9c3] text-[30px] lg:text-[80px] font-semibold">
              for the modern world
            </h2>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500 text-base lg:text-[20px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-500 text-base lg:text-[20px] text-center">
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex flex-row  items-center gap-2 lg:gap-4 lg:mt-6 mt-4">
            <button className="bg-[#ececec] lg:px-6 text-sm lg:text-base px-[10px] py-2 lg:py-3 rounded-full text-gray-700 font-semibold">
              Download the app{" "}
            </button>
            <button className="border-2 border-gray-500 py-[6px] text-sm lg:text-base px-4 lg:px-6 text-gray-400 lg:py-3 rounded-full  font-semibold">
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
