import Link, { LinkProps } from "next/link";
import React, { FC } from "react";

type BaseProps = {
  text: string;
  styles?: string;
  variant: "rounded" | "corner" | "sm" | "lg" | "lg-1";
};

type ActionProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as: "button";
      })
    | (LinkProps & {
        as: "link";
      })
  );

const LinkButton: FC<ActionProps> = ({ variant, styles, text, ...props }) => {
  const getSizeClass = () => {
    switch (variant) {
      case "rounded":
        return "max-w-[240px] w-full h-[56px] rounded-full before:hover:rounded-full font-light text-[1.5rem] leading-[1.8rem]";
      case "corner":
        return "max-w-[238px] w-full h-[54px] rounded-md rounded-bl-[24px] hover:rounded-[34px] before:hover:rounded-[34px] font-medium text-xl leading-[1.525rem]";

      case "sm":
        return "max-w-[130px] w-full h-[44px] rounded-lg before:-inset-y-[10px] before:-inset-x-[11px] hover:rounded-[38px] before:hover:rounded-[38px] font-semibold text-sm leading-[1.375rem]";

      case "lg-1":
      case "lg":
        return "max-w-[515px] w-full h-[51px] rounded-[8px] hover:rounded-[34px] before:hover:rounded-[34px] font-semibold text-base leading-[1.21rem]";

      default:
        return "";
    }
  };

  const allClassNames = `inline-block bg-indigo-blue border-indigo-blue before:cotent-[''] before:hover:border-indigo-blue relative m-[16px] mt-10 border-[4px] text-lg transition-all duration-700 ease-in-out before:absolute before:-inset-[10.5px] before:border-transparent  before:transition-all before:duration-700 hover:bg-[rgba(28,48,107,0.85)]  before:hover:border-[4px] before:z-1 ${getSizeClass()} ${styles}`;

  if (props.as === "link") {
    const { as, ...rest } = props;
    return (
      <Link
        className={`${allClassNames} inline-flex items-center justify-center`}
        {...rest}
      >
        {text}
      </Link>
    );
  }
  const { as, ...rest } = props;
  return (
    <button
      className={`${allClassNames} ${rest.disabled ? "disabled" : ""}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default LinkButton;
