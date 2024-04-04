import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      yPercent: 0,
    }).to(transitionElement, {
      yPercent: 100,
      duration: 0.7,
      ease: "expo.inOut",
    });
  }
};

const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      yPercent: -100,
    }).to(animationWrapper, {
      yPercent: 0,
      ease: "expo.inOut",
      onComplete: () => {
        router.push(href);
      },
    });
  }
};

export { animatePageIn, animatePageOut };
