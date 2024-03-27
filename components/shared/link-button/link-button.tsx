import Link, { LinkProps } from "next/link";
import React, { FC } from "react";
import Spinner from "../spinner/spinner";

type BaseProps = {
  text: string;
  styles?: string;
  variant: "rounded" | "corner" | "sm" | "lg" | "lg-1";
  loading?: boolean;
};

type ActionProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as: "button";
        loading?: boolean;
      })
    | (LinkProps & {
        as: "link";
      })
  );

const LinkButton: FC<ActionProps> = ({ variant, styles, text, ...props }) => {
  // TODO - need this later
  //    lg-1 styles="!max-w-[31.375rem] !h-[3.853rem] hover:!rounded-[2.75rem] before:!hover:rounded-[2.75rem] !font-semibold !text-[1.208rem] !leading-[1.462rem]"

  const getSizeClass = () => {
    switch (variant) {
      case "rounded":
        return "max-w-[15rem] w-full h-[3.5rem] rounded-full before:hover:rounded-full font-light text-[1.5rem] leading-[1.8rem]";
      case "corner":
        return "max-w-[14.875rem] w-full h-[3.375rem] rounded-md rounded-bl-[1.5rem] hover:rounded-[2.125rem] before:hover:rounded-[2.125rem] font-medium text-xl leading-[1.525rem]";

      case "sm":
        return "max-w-[8.125rem] w-full h-[2.75rem] rounded-lg before:-inset-y-[0.625rem] before:-inset-x-[0.688rem] hover:rounded-[2.375rem] before:hover:rounded-[2.375rem] font-semibold text-sm leading-[1.375rem]";

      case "lg":
        return "max-w-[32.188rem] w-full h-[2.663rem] md:h-[3.188rem] rounded-[0.5rem] hover:rounded-[2.125rem] before:hover:rounded-[2.125rem] font-semibold text-[0.938rem] leading-[1.134rem] md:text-base md:leading-[1.21rem]";

      case "lg-1":
        return "sm:max-w-[31.375rem] w-full h-[2.663rem] md:h-[3.853rem] rounded-[0.5rem]  hover:rounded-[2.75rem] before:hover:rounded-[2.75rem] font-semibold !text-[0.938rem] leading-[1.134rem] md:!text-[1.208rem] md:leading-[1.462rem]";

      default:
        return "";
    }
  };

  const allClassNames = `inline-block bg-indigo-blue border-indigo-blue before:cotent-[''] before:hover:border-indigo-blue relative  border-[0.25rem] text-lg transition-all duration-700 ease-in-out before:absolute before:-inset-[0.656rem] before:border-transparent  before:transition-all before:duration-700 hover:bg-[rgba(28,48,107,0.85)]  before:hover:border-[0.25rem] ${getSizeClass()} ${styles}`;

  if (props.as === "link") {
    const { ...rest } = props;
    return (
      <Link
        className={`${allClassNames} inline-flex items-center justify-center`}
        {...rest}
      >
        {text}
      </Link>
    );
  }
  const { loading, ...rest } = props;
  return (
    <button
      className={`${allClassNames} ${rest.disabled ? "disabled" : ""} flex items-center justify-center gap-3`}
      {...rest}
    >
      <span className="text-white">{text}</span>
      {loading && (
        <div>
          <Spinner size="size-4 md:size-6" color="text-white" />
        </div>
      )}
    </button>
  );
};

export default LinkButton;
