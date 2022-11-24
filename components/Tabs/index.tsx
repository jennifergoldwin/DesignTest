import React from "react";
import Explore from "../Explore";

const TabsLayout = () => {
  const [indexLayout, setIndexLayout] = React.useState(2);

  return (
    <div className="">
      <div className="bg-white border-b border-gray-200 dark:border-gray-700 flex justify-center items-center ">
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
              Home
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
              Explore
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
              Feed
            </button>
          </li>
          <li role="presentation">
            <button
              onClick={() => setIndexLayout(4)}
              className={`${
                indexLayout === 4
                  ? "text-[#B2294B] border-[#B2294B]"
                  : " border-transparent"
              } inline-block p-4 rounded-t-lg border-b-2 hover:text-[#B2294B] hover:border-[#B2294B]`}
              id="scheduled-tab"
              data-tabs-target="#scheduled"
              type="button"
              role="tab"
              aria-controls="scheduled"
              aria-selected="false"
            >
              Scheduled
            </button>
          </li>
        </ul>
      </div>

      <div id="myTabContent">
        <div
          className={`${
            indexLayout === 1 ? "block" : "hidden"
          } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <h1>home</h1>
        </div>

        <div
          className={`${
            indexLayout === 2 ? "block" : "hidden"
          } p-0 sm:px-3 md:px-6 lg:px-12  rounded-lg dark:bg-gray-800`}
          id="explore"
          role="tabpanel"
          aria-labelledby="explore-tab"
        >
          <Explore />
        </div>

        <div
          className={`${
            indexLayout === 3 ? "block" : "hidden"
          } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
          id="feed"
          role="tabpanel"
          aria-labelledby="feed-tab"
        >
          <h1>feed</h1>
        </div>
        <div
          className={`${
            indexLayout === 4 ? "block" : "hidden"
          } p-4 bg-gray-50 rounded-lg dark:bg-gray-800`}
          id="schedule"
          role="tabpanel"
          aria-labelledby="schedule-tab"
        >
          <h1>schedule</h1>
        </div>
      </div>
    </div>
  );
};

export default TabsLayout;
