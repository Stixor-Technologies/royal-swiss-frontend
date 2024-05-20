import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  const loaderLogo = document.getElementById("loader-logo");

  gsap.killTweensOf(loaderLogo);

  gsap.to(loaderLogo, {
    duration: 0.3,
    scale: 1.1,
    ease: "power1.inOut",
  });

  gsap.to(loaderLogo, {
    duration: 0.4,
    scale: 0,
    opacity: 1,
    ease: "power1.inOut",
    filter: "drop-shadow(0px 0px 20px #EADDA8)",
    delay: 0.4,
  });

  if (transitionElement) {
    document.body.classList.remove("!overflow-hidden");

    const tl = gsap.timeline({ delay: 0.9 });

    tl.set(transitionElement, {
      yPercent: 0,
    }).to(transitionElement, {
      yPercent: 200,
      // ease: "expo.inOut",
      onComplete: () => {
        gsap.set(loaderLogo, { scale: 1 });
      },
    });
  }
};

const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");
  const loaderLogo = document.getElementById("loader-logo");

  gsap.to(loaderLogo, {
    duration: 1,
    yoyo: true,
    repeat: -1,
    scale: 0.9,
    ease: "power1.inOut",
  });

  if (animationWrapper) {
    document.body.classList.add("!overflow-hidden");
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
