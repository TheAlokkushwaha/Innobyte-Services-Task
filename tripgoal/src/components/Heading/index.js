import React from "react";

// Define size classes for different heading sizes
const sizes = {
  small: "text-[16px]",
  medium: "text-[24px]",
  large: "text-[32px]",
  xlarge: "text-[40px]",
};

const Heading = ({ children, className = "", size = "medium", as, ...restProps }) => {
  const Component = as || "h6"; // Default to 'h6' if 'as' prop is not provided

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };