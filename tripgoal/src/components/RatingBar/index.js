import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  children,
  className = "",
  starCount = 5,
  color = "grey",
  activeColor = "red",
  isEditable = false,
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={isEditable} // Corrected the syntax for the 'edit' prop
        className={className} // Applying the className passed via props
        count={starCount} // Set the number of stars
        isHalf={false} // You can change this to allow half-stars if needed
        color={color} // Color of the unfilled stars
        activeColor={activeColor} // Color of the active (filled) stars
        {...restProps} // Spread the rest of the props for customization
        key={restProps.value || 1}
      />
      {children} 
    </>
  );
};

export { RatingBar };