import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = React.forwardRef(
  (
    {
      items = [],
      activeIndex = 0,
      centerMode,
      magnifiedIndex = 0,
      activeSlideCss = "scale-75",
      ...props
    },
    ref
  ) => {
    const issmall = (index) => {
      if (props?.activeIndex + magnifiedIndex >= items?.length) {
        return index !== props?.activeIndex + magnifiedIndex - items?.length;
      } else {
        return index !== props.activeIndex + magnifiedIndex;
      }
    };

    // Map through items and clone the active item with custom styles
    const slideItems = centerMode
      ? items?.map((child, index) => {
          if (issmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCss] // Fixed variable name
                .filter(Boolean)
                .join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <AliceCarousel
        items={slideItems}
        infinite
        ref={ref}
        {...props}
        touchTracking
        mouseTracking
        disableButtonsControls
      />
    );
  }
);

export { Slider };
