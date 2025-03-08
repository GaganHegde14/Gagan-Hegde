"use client";

import { forwardRef } from "react";

const Container = forwardRef(
  ({ children, className = "", size = "default", ...props }, ref) => {
    const sizes = {
      small: "max-w-3xl",
      default: "max-w-6xl",
      large: "max-w-7xl",
      full: "max-w-full",
    };

    const sizeClass = sizes[size] || sizes.default;

    return (
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizeClass} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
