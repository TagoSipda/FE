import { Link } from "@tanstack/react-router";
import React from "react";
import { ArrowDown, PArrowUp } from "./Arrow";

interface PBackButton extends PArrowUp {
  link: string;
  styles?: string;
}

const BackButton = ({
  link,
  color = "#FFFFFF",
  styles,
  ...props
}: PBackButton) => {
  return (
    <Link to={link}>
      <button className={`bg-main rounded-full  ${styles || "p-2"}`}>
        <ArrowDown color={color} classNames="rotate-90" {...props} />
      </button>
    </Link>
  );
};

export default BackButton;
