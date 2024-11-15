import React from "react";

// Sizes object (you can define different sizes for text here)
const sizes = {
  small: "text-[12px]",
  medium: "text-[16px]",
  large: "text-[20px]",
  xlarge: "text-[24px]",
};

const Text = ({ children, className = "", as, size = "", ...restProps }) => {
  const Component = as || "p"; // Default to 'p' if 'as' is not provided

  return (
    <Component className={`${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };