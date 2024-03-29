import { variantProps, VariantPropsOf } from "classname-variants/react";
import React, { ReactNode } from "react";

const tw = String.raw;

interface IconButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

const IconClassNames = variantProps({
  base: "grid origin-center place-items-center rounded-full active:scale-95 p-0",
  variants: {
    size: {
      xs: "h-6 w-6 p-0",
      sm: "h-8 w-8 p-0",
      smp: "h-8 w-8 p-0",
      md: " h-12 w-12 p-0",
      lg: "h-14 w-14 p-0",
      pd: "p-0",
      
    },
    shadow: {
      true: "shadow-md",
    },
    color: {
      primary: `bg-primaryColor`,
      pink: tw`bg-[#FF685B0F]`,
      white: tw`bg-white hover:bg-gray-50 active:bg-gray-100`,
      gray: tw`bg-gray-100`,
      custom: "",
    },
    border: {
      white: tw`border border-white`,
      none: "border-none",
    },
  },
  defaultVariants: {
    size: "lg",
    shadow: false,
    border: "none",
    color: "custom",
  },
});
type IconButtonExtProps = JSX.IntrinsicElements["button"] &
  VariantPropsOf<typeof IconClassNames> &
  IconButtonProps;
const   IconButton = ({ icon, onClick, ...props }: IconButtonExtProps) => {
  return (
    <button onClick={onClick} type="button" {...IconClassNames(props)}>
      {icon}
    </button>
  );
};
type IcontextProps = JSX.IntrinsicElements["button"] & {
  text?: string;
  icon: ReactNode;
  activeIcon?: ReactNode;
};
type activeText =
  | { active?: false; activeClass?: never }
  | { active: boolean; activeClass: string };
const IconText = ({
  icon,
  activeIcon,
  text,
  active=false,
  activeClass,
  
  ...otherProps
}: IcontextProps & activeText) => {
  if (activeIcon) {
    return (
      <button
        className="flex h-full flex-col items-center justify-between"
        
        {...otherProps}
      >
        {active ? activeIcon : icon}
        <h1 className={`${active? activeClass :""} text-[12px]`}>{text}</h1>
      </button>
    );
  }
  return (
    <button
      className="flex flex-col items-center p-0"
      {...otherProps}
      >
      {icon}
      <h1 className={`${active? activeClass :""} text-[12px]`}>{text}</h1>
    </button>
  );
};
IconButton.text = IconText;
export default IconButton;