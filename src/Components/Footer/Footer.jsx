import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0b0121] py-10">
      <div className="px-2 lg:px-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="col-span-1">
              <div className="flex lg:justify-between gap-4 flex-col justify-center items-center lg:gap-0 lg:flex-row">
                <div className="lg:ml-0 ml-[75px]">
                  <h2 className="text-white text-[20px] lg:text-[26px]">
                    Contact
                  </h2>
                  <ul className="mt-3">
                    <li className="text-gray-400 text-[14px] lg:text-[18px]">
                      Work inquires: work@xflow.com
                    </li>
                    <li className="text-gray-400 text-[14px] lg:text-[18px]">
                      PR and speaking: press@xflow.com
                    </li>
                    <li className="text-gray-400 text-[14px] lg:text-[18px]">
                      New business: newbusiness@xflow.com
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-white text-[20px] lg:text-[26px]">
                    Address
                  </h2>
                  <ul className="mt-3">
                    <li className="text-gray-400 text-[15px] lg:text-[18px]">
                      398 11th Street, Floor 2
                    </li>
                    <li className="text-gray-400 text-[15px] lg:text-[18px]">
                      San Francisco, CA 94103
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col  lg:flex-row lg:gap-0 gap-4 items-center">
                <div className="lg:mr-[175px] lg:mt-0 mt-4">
                  <h1 className="text-white text-[20px] lg:text-[26px]">
                    Careers
                  </h1>
                  <ul className="mt-3">
                    <li className="text-gray-400 text-[18px]">
                      Careers@xflow.com
                    </li>
                  </ul>
                </div>
                <div className="lg:ml-[240px] mr-[90px]">
                  <h1 className="text-white text-[20px] lg:text-[26px]">
                    Social
                  </h1>
                  <ul className="mt-3">
                    <li className="text-gray-400 text-[16px] lg:text-[18px]">
                      Twitter
                    </li>
                    <li className="text-gray-400 text-[16px] lg:text-[18px]">
                      Instagram
                    </li>
                    <li className="text-gray-400 text-[16px] lg:text-[18px]">
                      Tik Tok
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-1"></div>
          </div>
          <div className="mt-6 lg:mt-0">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <h2 className="text-gray-500 text-[15px] lg:text-[17px]">
                  © 2024 XFlow. All Rights Reserved
                </h2>
              </div>
              <div>
                <h2 className="text-white text-[20px] lg:text-[26px] font-bold">
                  xFlow
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
