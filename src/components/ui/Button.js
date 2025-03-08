"use client";

import { forwardRef } from "react";
import Link from "next/link";

const buttonVariants = {
  primary: "bg-primary hover:bg-primary-dark text-white",
  secondary: "bg-secondary hover:bg-secondary-dark text-white",
  accent: "bg-accent hover:bg-accent-dark text-white",
  outline:
    "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white",
  ghost:
    "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-foreground",
  danger: "bg-danger hover:bg-red-600 text-white",
  success: "bg-success hover:bg-green-600 text-white",
};

const buttonSizes = {
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

const Button = forwardRef(
  (
    {
      children,
      className = "",
      variant = "primary",
      size = "md",
      href,
      disabled = false,
      isLoading = false,
      loadingText = "Loading...",
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none";
    const variantClasses = buttonVariants[variant] || buttonVariants.primary;
    const sizeClasses = buttonSizes[size] || buttonSizes.md;
    const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

    const content = (
      <>
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            {loadingText}
          </>
        ) : (
          <>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
          </>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={allClasses} ref={ref} {...props}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={allClasses}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
