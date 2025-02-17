import React, { useMemo } from "react";
import Modal from "../common/Modal";
import JoystickIcon from "../../assets/icons/Joystick";
import FlagIcon from "../../assets/icons/Flag";
import DotIcon from "../../assets/icons/Dot";
import FuelIcon from "../../assets/icons/Fuel";

const TaskModal = ({ selected, onClose, show }) => {
  const tasks = useMemo(() => {
    return [
      {
        icon: (
          <div className="flex flex-col">
            <div className="my-2 flex justify-center">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#444] rounded-xl">
                <JoystickIcon width={60} height={60} color={"random"} />
              </div>
            </div>
            <div className="flex justify-center my-2">
              <span className="ml-1 px-1 text-xs bg-blue-400 rounded text-black">
                New
              </span>
            </div>
          </div>
        ),
        title: "Auto-driving",
        content:
          "Link your Telegram to your OKX account and pass identity verification on OKX to unlock Auto-driving. This lets you automatically play the game while you’re away, so you’re always earning points.",
        subcontent: (
          <div className="text-stone-400 flex">
            <div className="mr-1 flex items-center">
              <FlagIcon width={18} height={18} color={"white"} />
            </div>
            <span className="text-lg font-bold text-white">Free</span>
            <div className="px-2 pt-3">
              <DotIcon width={4} height={4} color={"#a8a29e"} />
            </div>
            <div className="flex items-center">
              <span className="text-md">Lvl 0</span>
            </div>
          </div>
        ),
        button: "Learn More",
        action: "",
      },
      {
        icon: (
          <div className="flex flex-col">
            <div className="my-2 flex justify-center">
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#444] rounded-xl">
                <FuelIcon width={60} height={60} color={"random"} />
              </div>
            </div>
          </div>
        ),
        title: "Reload Fuel Task",
        content: "Enjoy 3 free fuel tank refills every day!",
        subcontent: (
          <div className="text-stone-400 flex">
            <div className="mr-1 flex items-center">
              <FlagIcon width={18} height={18} color={"white"} />
            </div>
            <span className="text-lg font-bold text-white">Free</span>
            <div className="px-2 pt-3">
              <DotIcon width={4} height={4} color={"#a8a29e"} />
            </div>
            <div className="flex items-center">
              <span className="text-md">3/3</span>
            </div>
          </div>
        ),
        button: "Boost Now",
        action: "",
      },
      {
        title: "Connect Telegram and complete identity verification",
        content:
          "Link your Telegram account using the 'Connected accounts' option in the User Center on the OKX app. Then, complete the KYC verification with your ID. More details on the 'Surprises' page.",
        button: "I have completed the verification",
        action: "",
      },
      {
        title: "Follow OKX official Twitter",
        content: "Follow OKX official twitter for extra points!",
        button: "Go now",
        action: "",
      },
      {
        title: "Daily Rewards",
        content: "Follow OKX official twitter for extra points!",
        button: "Go now",
        action: "",
      },
      {
        title: "Join announcement channel",
        content: "Follow OKX official twitter for extra points!",
        button: "Go now",
        action: "",
      },
    ];
  }, []);

  return (
    selected >= 0 && (
      <>
        <Modal
          show={show}
          onClose={onClose}
          title={
            <div className="mt-8 flex flex-col">
              {tasks[selected].icon && tasks[selected].icon}
              <span>{tasks[selected].title}</span>
            </div>
          }
          className={"items-end"}
        >
          <div className="flex flex-col">
            <div className="flex justify-center">
              <span className="mx-4 text-stone-200 text-md text-wrap text-center">
                {tasks[selected].content}
              </span>
            </div>
            {tasks[selected].subcontent && (
              <div className="flex justify-center my-2">
                {tasks[selected].subcontent}
              </div>
            )}
            <div className="flex justify-center mt-4 mb-6">
              <button className="mx-4 bg-white text-black text-lg font-medium w-full h-[50px] rounded-[25px]">
                {tasks[selected].button}
              </button>
            </div>
          </div>
        </Modal>
      </>
    )
  );
};

export default TaskModal;
