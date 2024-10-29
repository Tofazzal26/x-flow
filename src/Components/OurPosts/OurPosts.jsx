import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./OurPostStyle.css";

const OurPosts = () => {
  const [moreData, setMoreData] = useState(9);

  const {
    isLoading,
    data: allPost = [],
    error,
  } = useQuery({
    queryKey: ["allPost"],
    queryFn: async () => {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      return resp.data;
    },
  });

  const userQueries = useQueries({
    queries: allPost.map((post) => ({
      queryKey: ["user", post.userId],
      queryFn: async () => {
        const resp = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${post?.userId}`
        );
        return resp.data;
      },
      enabled: !!post?.userId,
    })),
  });

  const users = userQueries.map((query) => query.data);

  return (
    <div>
      <div>
        <div className="bg-[#0b0121] lg:py-10">
          <div className="container mx-auto">
            <div className="columns-1 sm:col-span-2 lg:columns-3 gap-6 p-4">
              {allPost.slice(0, moreData).map((item, index) => (
                <div className="break-inside-avoid mb-4 p-20 card space-y-6  text-white  rounded-[16px] shadow-Card">
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r w-[60px] h-[60px] flex justify-center items-center rounded-full from-[#eb27f8] to-[#4e03c3]">
                      <FaUser size={30} className="" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[20px]">
                        {users[index] ? users[index].name : "Loading..."}
                      </h2>
                    </div>
                  </div>
                  <h2 className="text-[45px]">{item?.title}</h2>
                  <p className="text-[20px]">{item?.body}</p>
                  <div className="my-4">
                    <button className="border-b-2 text-[22px]">
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center my-4">
              <button
                onClick={() => setMoreData(moreData + 9)}
                className="border-2 border-gray-500 font-semibold px-6 py-2 text-[18px] rounded-full text-gray-400"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPosts;
