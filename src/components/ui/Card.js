"use client";

import { forwardRef } from "react";

const Card = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

const CardTitle = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <h3
      className={`text-xl font-semibold text-gray-900 dark:text-white ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </h3>
  );
});

CardTitle.displayName = "CardTitle";

const CardContent = forwardRef(
  ({ children, className = "", ...props }, ref) => {
    return (
      <div className={`px-6 py-4 ${className}`} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

const CardFooter = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
