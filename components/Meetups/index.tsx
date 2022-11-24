import React from "react";

const dummyData = [
  {
    label: "Recent Updates",
    value:
      "I’m free today 10:30 am - 3 pm, coming from West. Open to try any area and place!",
    url: "/images/icon.png",
  },
  {
    label: "Availability",
    value:
      "Flexi but preferably weekdays! Please arrange at least two days in advance.",
    url: "/images/icon-1.png",
  },
  {
    label: "Activities",
    value: "Cafe, bar, picnic, anything easy going!",
    url: "/images/icon-2.png",
  },
  {
    label: "Food Preferences",
    value: "Pasta and sushi",
    url: "/images/icon-3.png",
  },
  {
    label: "Lorem ipsum",
    value:
      "Lorem ipsum dolor sit amet consectetur. Diam feugiat auctor proin at elementum duis. Donec quis lectus mollis viverra risus donec non nisl.",
    url: "/images/icon-4.png",
  },
];
const Meetups = () => {
  return (
    <div className="mt-4 py-4 px-2 ">
      <div className="font-[600]">Meetups</div>
      <hr className="my-4 h-px bg-[#E0E0E0] border-0 dark:bg-gray-700" />

      {dummyData.map((item: any) => {
        return (
          <div key={item.label} className="flex items-start gap-2 my-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.url} alt="" />
            <div>
              <div className="font-[600]">{item.label}</div>
              <div className="font-[400] text-[0.75rem] text-[#878787]">
                {item.value}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Meetups;
