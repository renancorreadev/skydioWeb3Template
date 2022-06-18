import React from "react";
import { styled, css } from "@stitches/react";
import type * as Stitches from "@stitches/react";

//Types for MyButton component props
type MyButtonTypes = Stitches.VariantProps<typeof ButtonTypes>;

interface ButtonProps {
  id?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

const ButtonTypes = css("button", {
  variants: {
    size: {
      small: {
        fontSize: 24,
        padding: 20,
      },
      large: {
        fontSize: 64,
        padding: 16,
      },
    },
    bgColor: {
      yellow: {
        backgroundColor: "yellow",
      },
      red: {
        backgroundColor: "red",
      },
      black: {
        backgroundColor: "black",
      },
      purple: {
        backgroundColor: "purple",
      },
      orange: {
        backgroundColor: "orange",
      },
      green: {
        backgroundColor: "green",
      },
    },
    color: {
      black: {
        color: "black",
      },
      white: {
        color: "white",
      },
    },
  },
});

export function Button({
  id,
  size,
  bgColor,
  color,
  onClick,
  disabled,
  children,
  className,
}: MyButtonTypes & ButtonProps) {
  // Component to Renderize
  const Button = styled("button", {
    padding: "0.75rem",
    borderRadius: "0.2rem",
    border: "1px solid #fff",
    color: "#fff",

    variants: {
      size: {
        small: {
          fontSize: 24,
          padding: 20,
        },
        large: {
          fontSize: 64,
          padding: 16,
        },
      },
      bgColor: {
        yellow: {
          backgroundColor: "yellow",
        },
        red: {
          backgroundColor: "red",
        },
        black: {
          backgroundColor: "black",
        },
        purple: {
          backgroundColor: "purple",
        },
        orange: {
          backgroundColor: "orange",
        },
        green: {
          backgroundColor: "green",
        },
      },
      color: {
        black: {
          color: "black",
        },
        white: {
          color: "white",
        },
      },
    },
    default: {
      backgroundColor: "white",
    },
  });

  return (
    <Button
      id={id}
      size={size}
      bgColor={bgColor}
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </Button>
  );
}
