"use client";

import { forwardRef } from "react";
import Container from "./Container";

const Section = forwardRef(
  (
    {
      children,
      className = "",
      id,
      containerSize = "default",
      containerClassName = "",
      withContainer = true,
      ...props
    },
    ref
  ) => {
    return (
      <section
        id={id}
        className={`py-12 md:py-16 lg:py-20 ${className}`}
        ref={ref}
        {...props}
      >
        {withContainer ? (
          <Container size={containerSize} className={containerClassName}>
            {children}
          </Container>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
