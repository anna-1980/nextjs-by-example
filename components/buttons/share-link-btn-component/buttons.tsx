"use client";
import ShareBtn from "./share-link-btn-component";

export default function Buttons () {
    const onClickFunction = () => {
        console.log("BTN click function");
    }
    const helperFunction = `setTimeout(() => {
        alert("BTN helper function");
      }, 500)`;
  return (
    <div>
             <ShareBtn
          onClickFunction={onClickFunction}
          helperFunction={helperFunction}
          setClick
        />
    </div>
  )
}