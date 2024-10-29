const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#331788] via-[#160a36] to-[#0b0221]">
      <div className="px-2 lg:px-0">
        <div className="flex justify-center items-center flex-col lg:py-[120px] py-4">
          <button className="text-[#f2f4f8] border-[2px] border-[#665690] rounded-full lg:px-4 px-2 text-[14px] lg:text-base py-1 lg:py-2 font-medium">
            We just raised $20M in Series B. Learn more
          </button>
          <div className="text-center lg:leading-[65px] my-4">
            <h2 className="text-[#e8e8e9] text-[30px] lg:text-[60px] font-semibold">
              Modern analytics
            </h2>
            <h2 className="text-[#bcb9c3] text-[30px] lg:text-[60px] font-semibold">
              for the modern world
            </h2>
          </div>
          <p className="text-[#9d9aa5] text-base text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="text-[#9d9aa5] text-base text-center">
            Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="flex lg:flex-row flex-col items-center gap-4 mt-6">
            <button className="bg-[#ececec] lg:px-6 px-4 py-1 lg:py-2 rounded-full text-[#0b081c] font-semibold">
              Download the app{" "}
            </button>
            <button className="border-2 border-[#ececec] py-1 px-4 lg:px-6 text-[#ececec] lg:py-2 rounded-full  font-semibold">
              Talk to an expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
