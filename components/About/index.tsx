import React from "react";
import Button from "../Button";
import Meetups from "../Meetups";

const dummyData = [
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Race",
    value: "Chinese",
  },
  {
    label: "Languages",
    value: "English, Mandarin",
  },
  {
    label: "Height",
    value: "158cm",
  },
  {
    label: "Sexual Orientation",
    value: "Heterosexual",
  },
  {
    label: "Meetups",
    value: "$200 / 2h",
  },
  {
    label: "Responsiveness (chats)",
    value: "Usually responds in 30 minutes",
  },
];
const About = () => {
  return (
    <div>
      <div className="w-full bg-white rounded-2xl py-4 px-6 mt-4">
        <div>
          <div className="font-[600]">Xiuxian, 22</div>
          <div className="flex gap-4">
            <div className="flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/work.png" alt="" />
              <div className="font-medium ml-2">SIM-UOL</div>
            </div>
            <div className="flex">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/univ.png" alt="" />
              <div className="font-medium ml-2">Student at University</div>
            </div>
          </div>
        </div>
        <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700" />

        {dummyData.map((item: any, idx: number) => {
          return (
            <div key={idx} className="grid grid-cols-2">
              <div className="font-[600] pr-4">{item.label}</div>
              <div className="font-[400] text-[#878787]">{item.value}</div>
            </div>
          );
        })}
        <hr className="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex items-center justify-between">
          <div className="flex justify-start items-center gap-2">
            <div className="font-medium color-[#1E1E1E]">Rating</div>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/rating.svg" alt="" />
          </div>
          <div className="flex items-center w-full">
            <span className="w-full text-right mr-2">4.5 of 193 reviews</span>
            <Button
              background="bg-[#F0F0F0]"
              text="Reviews"
              color="color-[#1E1E1E]"
            />
          </div>
        </div>
      </div>
      <Meetups />
    </div>
  );
};

export default About;
