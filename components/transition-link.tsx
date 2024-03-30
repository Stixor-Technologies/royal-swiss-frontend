"use client";
import { FC, ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/transition-animation";
import { useMenuStore } from "@/store/menu-store";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
};

const TransitionLink: FC<TransitionLinkProps> = ({ href, children }) => {
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      setIsMenuOpen(false);
      animatePageOut(href, router);
    }
  };

  return (
    <button
      data-href={href}
      className="w-full"
      role="link"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default TransitionLink;
