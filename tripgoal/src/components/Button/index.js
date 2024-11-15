import React from "react";
import PropTypes from "prop-types";

// Shape styles
const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[10px]",
};

// Variants
const variants = {
  outline: {
    blue_gray_500: "border-blue_gray-500 border border-solid",
  },
  fill: {
    blue_A200: "bg-blue-a200 text-white-a700",
  },
};

// Hover Variants
const hoverVariants = {
  outline: {
    blue_gray_500: "hover:bg-blue_gray-500 hover:text-white",
  },
  fill: {
    blue_A200: "hover:bg-blue-700",
  },
};

// Sizes
const sizes = {
  md: "h-[50px] px-7 text-[16px]",
  xs: "h-[40px] px-2.5",
  sm: "h-[50px]",
  lg: "h-[60px] px-[34px] text-[16px]",
};

// Button Component
const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round", 
  variant = "fill",
  size = "lg", 
  color = "blue_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]} ${variant && hoverVariants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

// Prop Types for validation
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["md", "xs", "sm", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["blue_gray_500", "blue_A200"]),
};

export { Button };
