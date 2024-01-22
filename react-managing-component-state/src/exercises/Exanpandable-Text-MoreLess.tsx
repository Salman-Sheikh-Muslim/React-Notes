import React, { useState } from "react";

interface Props {
  flexButton: boolean;
  onClick: () => void;
  children: string;
  maxChars?: number;
}

const ExanpandableTextMoreLess = ({
  flexButton,
  onClick,
  children,
  maxChars = 30,
}: Props) => {
  // const maxCharachters =  () => {
  //     if (maxChars) {
  //       console.log('hi');
  //     }
  //   };

  const maxCharachters = children.substring(0, maxChars) + "...";

  return (
    <>
      <div>
        {flexButton === true ? children : maxCharachters}
        {children.length >= 10 ? (
          <button onClick={onClick}>
            {flexButton === true ? "Less" : "More"}
          </button>
        ) : (
          children
        )}
      </div>
    </>
  );
};

export default ExanpandableTextMoreLess;
