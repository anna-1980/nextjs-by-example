"use client";
import { useState } from "react";
import { LinkIcon } from '@heroicons/react/20/solid'

export interface ShareBtnProps {
  onClick?: () => void;
}

export default function ShareBtn({ onClick }: ShareBtnProps) {
  const [clicked, setClicked] = useState(false);
  console.log("rendering with hydration", clicked);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    // console.log("clicked")
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div className="flex items-baseline">
      <button
        onClick={handleClick}
        className="flex gap-1 items-centerrounded border rounded border-slate-400 px-2  mb-3 py-2 text-slate-500 text-sm hover:shadow-xl hover:bg-orange-100"
      >
      <LinkIcon className="h-5, w-5"/>
      {clicked ?  <span className=" text-orange-500  ">Link copied to clipboard</span>  : "Share"}
      </button>
     
    </div>
  );
}
