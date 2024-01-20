import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary"; //? means property is optional
  //using string literals with (|) union operator to define values that can be accepted.
  onClick: () => void;
}

const AnotherButtonAlertB = ({
  children,
  onClick,
  color = "primary",
}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default AnotherButtonAlertB;
