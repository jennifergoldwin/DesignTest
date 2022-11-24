import React from "react";
import Button from "../Button";

interface IMemberProps {
  id: number;
  data: any;
  title: string;
}
const Member: React.FC<IMemberProps> = ({ id, data, title }) => {
  return (
    <div className="w-full bg-white rounded-2xl py-4 px-6 mt-4">
      <div className="font-[600] font-xl">{title}</div>
      <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      {id === 1 &&
        data.map((item: any, index: number) => {
          return (
            <div key={index}>
              <div className="flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.url} alt="" />

                <div className="block relative ml-2">
                  <h2
                    className={`${
                      item.name === "INFLUENCER"
                        ? "text-[#E4BC28]"
                        : "text-[#32C08D]"
                    } font-[600] text-lg`}
                  >
                    {item.name}
                  </h2>
                  <div className="text-[#878787] font-[400] text-sm">
                    {item.username}
                  </div>
                  <div className=" absolute bottom-0 text-[0.75rem] text-[#1E1E1E]">{`Online ${item.online} ago`}</div>
                </div>
              </div>

              {index !== data.length - 1 && (
                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
              )}
            </div>
          );
        })}

      {id === 2 &&
        data.map((item: any, index: number) => {
          return (
            <div key={item.username}>
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.url} alt="" />

                <div className="block relative ml-2">
                  <div className="flex justify-start items-center">
                    <h2 className="font-[600] text-lg">{item.username}</h2>
                    <div className="text-[#2882F5] ml-2">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="text-[#878787] font-[400] text-sm"></div>
                  <div className=" text-[0.75rem] text-[#1E1E1E]">
                    Lorem ipsum dolor sit amet consectetur. Eu ipsum id egestas
                    viverra vitae posuere netus. Nec suspendisse et sit dictum
                    dui aliquet nulla quam. Tincidunt ut.
                  </div>
                </div>
              </div>

              {index !== data.length - 1 && (
                <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
              )}
            </div>
          );
        })}
      <div className="mt-4">
        <Button
          background="bg-[#F0F0F0]"
          color="text-[#1E1E1E]"
          text="Load more"
        ></Button>
      </div>
    </div>
  );
};
export default Member;
