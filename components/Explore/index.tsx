import React from "react";
import About from "../About";
import Button from "../Button";
import Main from "../Main";
import Member from "../Member";
const dummyData = [
  {
    url: "/images/image.png",
    name: "INFLUENCER",
    username: "@gella_97",
    online: "3 min",
  },
  {
    url: "/images/image-1.png",
    name: "PERSONALITY",
    username: "@notstella00",
    online: "7 min",
  },
  {
    url: "/images/image-2.png",
    name: "PERSONALITY",
    username: "@deePosh",
    online: "a day",
  },
  {
    url: "/images/image-2.png",
    name: "PERSONALITY",
    username: "@deePosh",
    online: "a day",
  },
];

const dummyData2 = [
  {
    url: "/images/image-3.png",
    username: "@fight4myway",
  },
  {
    url: "/images/image-4.png",
    username: "@tortally_Spice",
  },
  {
    url: "/images/image-5.png",
    username: "@deePosh",
  },
];

const Explore = () => {
  const [indexLayout, setIndexLayout] = React.useState(1);
  return (
    <div>
      <div className="bg-white p-2 sm:p-6 rounded-bl-lg rounded-br-lg">
        <div className="flex gap-[0.8rem]">
          <div className="w-2/6 flex justify-center items-center">
            <div className="flex justify-center items-center flex-col w-fit mx-2 gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/avatar.png" alt="avatar" />
              <div className="flex justify-center items-center rounded-full text-[#32C08D] font-bold text-[0.6rem] px-1 border-2 border-[#32C08D]  bg-[#EAF9F4] w-fit">
                <span>PERSONALITY</span>
              </div>
            </div>
          </div>

          <div className="w-4/6 flex justify-center flex-col items-start">
            <div className="flex">
              <h3 className="font-bold text-lg">@xuixian_98</h3>
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

            <div className="flex items-center">
              <div className="w-[8px] h-[8px] rounded-full bg-gradient-to-r from-[#45C99A] to-[#32C08D] "></div>
              <div className="text-sm font-medium ml-1">Online now</div>
            </div>
            <div className="font-medium text-sm text-[#878787]">
              İ’m your manic pixie dream girl ~ <br />
              Design student and anime weeb. Coffee addict. Anime fan and games.
              Come say hi!
            </div>
          </div>

          <div className="w-1/6 flex items-center justify-center">
            <button className="float-right">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/list.png" alt="" />
            </button>
          </div>
        </div>
        <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="divide-x flex gap-4 my-2">
          <Button
            background="bg-[#FBF4F6]"
            color="text-[#B2294B]"
            text="Chat"
          />
          <Button
            background="bg-[#FBF4F6]"
            color="text-[#B2294B]"
            text="Meet"
          />
          <Button
            background="bg-[#B2294B]"
            color="text-white"
            text="Followed"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <div className="bg-transparent border-b border-gray-200 dark:border-gray-700 flex justify-center items-center ">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center gap-1"
              id="myTab"
              data-tabs-toggle="#myTabContent"
              role="tablist"
            >
              <li className="mr-2" role="presentation">
                <button
                  onClick={() => {
                    setIndexLayout(1);
                  }}
                  className={`${
                    indexLayout === 1
                      ? "text-[#B2294B] border-[#B2294B]"
                      : " border-transparent"
                  } inline-block p-4 rounded-t-lg border-b-2 hover:text-[#B2294B] hover:border-[#B2294B]`}
                  id="home-tab"
                  data-tabs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="false"
                >
                  Main
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  onClick={() => setIndexLayout(2)}
                  className={`${
                    indexLayout === 2
                      ? "text-[#B2294B] border-[#B2294B]"
                      : " border-transparent"
                  } inline-block p-4 rounded-t-lg border-b-2 hover:text-[#B2294B] hover:border-[#B2294B]`}
                  id="explore-tab"
                  data-tabs-target="#explore"
                  type="button"
                  role="tab"
                  aria-controls="explore"
                  aria-selected="false"
                >
                  About
                </button>
              </li>
              <li className="mr-2" role="presentation">
                <button
                  onClick={() => setIndexLayout(3)}
                  className={`${
                    indexLayout === 3
                      ? "text-[#B2294B] border-[#B2294B]"
                      : " border-transparent"
                  } inline-block p-4 rounded-t-lg border-b-2 hover:text-[#B2294B] hover:border-[#B2294B]`}
                  id="feed-tab"
                  data-tabs-target="#settings"
                  type="button"
                  role="tab"
                  aria-controls="feed"
                  aria-selected="false"
                >
                  Post
                </button>
              </li>
            </ul>
          </div>

          <div id="myTabContent">
            <div
              className={`${
                indexLayout === 1 ? "block" : "hidden"
              } p-0 bg-gray-50 rounded-lg dark:bg-gray-800`}
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <Main />
            </div>

            <div
              className={`${
                indexLayout === 2 ? "block" : "hidden"
              } p-0 sm:px-3 md:px-6 lg:px-12  rounded-lg dark:bg-gray-800`}
              id="explore"
              role="tabpanel"
              aria-labelledby="explore-tab"
            >
              <About />
            </div>

            <div
              className={`${
                indexLayout === 3 ? "block" : "hidden"
              } p-0 sm:px-3 md:px-6 lg:px-12  rounded-lg dark:bg-gray-800`}
              id="explore"
              role="tabpanel"
              aria-labelledby="explore-tab"
            >
              <h1>post</h1>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <Member id={1} data={dummyData} title="Meet our new members" />
          <Member id={2} data={dummyData2} title="You might also wanna check" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
