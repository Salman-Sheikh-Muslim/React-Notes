import React, { ReactNode } from "react";
//rafce
// const Alert_passingChildren = () => {
//   return <div className="alert alert-primary">Alert_passingChildren</div>;
// };

//
import { Children } from "react";

interface AlertInterface {
  //children: string;
  children: ReactNode; //ReactNode is a class defined in React Module that allows us to pass elments as children
}

function Alert_passingChildren({ children }: AlertInterface) {
  return <div className="alert alert-primary">{children}</div>;
}

export default Alert_passingChildren;
