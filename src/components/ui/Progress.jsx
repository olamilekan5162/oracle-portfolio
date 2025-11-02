import React from "react";

const Progress = React.forwardRef(
  ({ value = 0, className = "", ...props }, ref) => {
    const safeValue = Math.min(Math.max(value, 0), 100);

    return (
      <div
        ref={ref}
        className={`relative w-full h-4 overflow-hidden rounded-full bg-secondary ${className}`}
        {...props}
      >
        <div
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${safeValue}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };
