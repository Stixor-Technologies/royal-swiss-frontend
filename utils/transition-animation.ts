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

// const animatePageOut = (href: string, router: AppRouterInstance) => {
//   const animationWrapper = document.getElementById("transition-element");

//   if (animationWrapper) {
//     const tl = gsap.timeline();

//     tl.set(animationWrapper, {
//       yPercent: -100,
//     }).to(animationWrapper, {
//       yPercent: 0,
//       ease: "expo.inOut",
//       onComplete: () => {
//         router.push(href);
//       },
//     });
//   }
// };

// const animatePageOut = (href: string, router: AppRouterInstance) => {
//   const animationWrapper = document.getElementById("transition-element");

//   if (animationWrapper) {
//     const tl = gsap.timeline();

//     tl.set(animationWrapper, {
//       yPercent: -100,
//     });
//     tl.to(animationWrapper, {
//       yPercent: 0,
//       ease: "expo.inOut",
//       onComplete: () => {
//         router.push(href);
//       },
//     }).to(animationWrapper, {
//       yPercent: 100,
//       delay: 0.65,
//     });
//   }
// };

const animatePageOut = (href: string, router: AppRouterInstance) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline();

    tl.set(animationWrapper, {
      bottom: "100%",
      top: 0,
    });
    tl.to(animationWrapper, {
      bottom: 0,
      ease: "expo.inOut",
      onComplete: () => {
        router.push(href);
      },
    }).to(animationWrapper, {
      delay: 0.25,
      top: "100%",
      ease: "expo.inOut",
    });
  }
};

export { animatePageIn, animatePageOut };
