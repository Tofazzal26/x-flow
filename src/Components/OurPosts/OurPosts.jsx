import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import "./OurPostStyle.css";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

const OurPosts = () => {
  const [moreData, setMoreData] = useState(9);
  let [isOpen, setIsOpen] = useState(false);
  const [singlePost, setSinglePost] = useState([]);

  function open(post) {
    setIsOpen(true);
    setSinglePost(post);
  }

  function close() {
    setIsOpen(false);
  }
  console.log(singlePost);
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
            {isLoading ? (
              <div className="flex justify-center items-center lg:my-4">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
              </div>
            ) : (
              ""
            )}
            <div className="columns-1 sm:col-span-2 lg:columns-3 gap-6 p-4">
              {allPost.slice(0, moreData).map((item, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-4 p-10 lg:p-20 card space-y-6  text-white  rounded-[16px] shadow-Card"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-r lg:w-[60px] w-[50px] h-[50px] lg:h-[60px] flex justify-center items-center rounded-full from-[#eb27f8] to-[#4e03c3]">
                      <FaUser size={30} />
                    </div>
                    <div>
                      <h2 className="font-semibold text-[16px] lg:text-[20px] text-gray-300">
                        {users[index] ? users[index].name : "Loading..."}
                      </h2>
                    </div>
                  </div>
                  <h2 className="text-[25px] lg:text-[45px] text-gray-200">
                    {item?.title?.slice(0, 60)}
                  </h2>
                  <p className="text-[16px] lg:text-[20px] text-gray-300">
                    {item?.body?.slice(0, 100)}
                  </p>
                  <div className="my-4">
                    <Button
                      onClick={() => open(item)}
                      className="border-b-[1px] border-gray-300 text-[15px] lg:text-[22px] text-gray-200"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center lg:my-4">
              <button
                onClick={() => setMoreData(moreData + 9)}
                className="border-2 border-gray-400 font-semibold px-6 py-2 text-[18px] rounded-full text-gray-400"
              >
                Load More
              </button>
            </div>
            <div>
              <Dialog
                open={isOpen}
                as="div"
                className="relative z-10 focus:outline-none"
                onClose={close}
              >
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                      transition
                      className="w-full max-w-3xl rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                      <div>
                        <p className="text-gray-200 text-lg">
                          Post Id: {singlePost?.id}
                        </p>
                        <h2 className="text-[25px] lg:text-[45px] text-gray-200">
                          {singlePost?.title}
                        </h2>
                        <p className="text-[16px] lg:text-[20px] text-gray-300">
                          {singlePost?.body}
                        </p>
                      </div>
                      <div className="mt-4 text-right">
                        <Button
                          className="inline-flex text-[18px] items-center gap-2 rounded-md bg-gray-700 py-1.5 px-4  font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                          onClick={close}
                        >
                          Close
                        </Button>
                      </div>
                    </DialogPanel>
                  </div>
                </div>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPosts;
