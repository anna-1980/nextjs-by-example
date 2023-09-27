"use client";
import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";


export interface ShareBtnProps {
  onClickFunction?: any;
  helperFunction?: string;
  setClick?: boolean;
}

export default function ShareBtn({ onClickFunction, helperFunction, setClick }: ShareBtnProps) {
  const [clicked, setClicked] = useState(false);

  // const btnFunction1: () => void = new Function(
  //   `${onClickFunction}`
  // ) as () => void;
  const btnFunction2: () => void = new Function(
    `${helperFunction}`
  ) as () => void;
 
  console.log(typeof(onClickFunction))
  const handleClick = () => {
    onClickFunction(); 
    setClicked(setClick);
    helperFunction ? btnFunction2() : null;
    setTimeout(() => {
      setClicked(false);
    }
    , 1000);
  };
 
  return (
    <div className="flex items-baseline">
      <button
        onClick={() => handleClick()}
        className="flex gap-1 items-centerrounded border rounded border-slate-400 px-2  mb-3 py-2 text-slate-500 text-sm hover:shadow-xl hover:bg-orange-100"
      >
        <LinkIcon className="h-5, w-5" />
        {clicked ? (
          <span className=" text-orange-500  ">Link copied to clipboard</span>
        ) : (
          "Share"
        )}
      </button>
    </div>
  );
}
