import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { AiFillLike } from "react-icons/ai";
import styles from "./LikeIcon.module.css";

interface Props {
  onClick: () => void;
}

function LikeIcon({ onClick }: Props) {
  const handleClick = () => {
    setFilling((prevValue) => !prevValue);
    onClick();
  };

  const [Filling, setFilling] = useState(false);

  return (
    <div>
      LikeIcon
      {Filling ? (
        <AiFillLike size="50" color="blue" onClick={handleClick} />
      ) : (
        <AiOutlineLike size="50" color="black" onClick={handleClick} />
      )}
      {/* {Filling === false && <AiOutlineLike size="50" color="black" />}
      {Filling === true && <AiFillLike size="50" color="blue" />}{" "} */}
      {/* <button
        className={[styles.btn, styles["btn-primary"]].join(" ")}
        onClick={handleClick}
      >
        Button
      </button> */}
    </div>
  );
}

export default LikeIcon;
