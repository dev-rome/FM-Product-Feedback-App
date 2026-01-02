"use client";

import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded px-4 py-2 font-medium transition",
        variant === "primary" && "bg-purple-600 text-white hover:bg-purple-700",
        variant === "secondary" &&
          "bg-gray-200 text-gray-900 hover:bg-gray-300",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
