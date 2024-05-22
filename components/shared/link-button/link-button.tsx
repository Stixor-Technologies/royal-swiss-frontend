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
  const getSizeClass = () => {
    switch (variant) {
      case "rounded":
        return "h-[2.029rem] max-w-[15rem] w-[8.688rem] lg:w-full text-[0.938rem] leading-[1.125rem] lg:h-[3.5rem]  font-light md:text-base md:leading-tight lg:text-[1.5rem] lg:leading-[1.8rem] md:w-[10rem] md:h-[2.5rem] rounded-[0.5rem] hover:rounded-[2.125rem] before:hover:rounded-[2.125rem]";
      case "corner":
        return "max-w-[14.875rem] h-[2.029rem] w-[8.688rem] text-[0.938rem] leading-[1.125rem] lg:w-full lg:h-[3.375rem] rounded-[0.188rem] lg:rounded-md hover:rounded-[2.125rem] before:hover:rounded-[2.125rem] lg:font-medium lg:text-xl lg:leading-[1.525rem] md:w-[10rem] md:h-[2.5rem] md:text-base md:leading-tight md:rounded-md md:rounded-bl-2xl";

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

  // text-lg

  const allClassNames = `inline-block bg-indigo-blue border-indigo-blue before:cotent-[''] before:hover:border-indigo-blue relative  border-[0.25rem] transition-all duration-700 ease-in-out before:absolute before:-inset-[0.656rem] before:border-transparent  before:transition-all before:duration-700 hover:bg-[rgba(28,48,107,0.85)]  before:hover:border-[0.25rem] ${getSizeClass()} ${styles}`;

  if (props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, loading, ...rest } = props;
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
