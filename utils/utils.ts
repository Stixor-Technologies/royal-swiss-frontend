import { Menu, SegmentInfo, SocialLinks } from "./types/types";
import FacebookIcon from "../public/icons/social-icons/facebook.svg";
import XIcon from "../public/icons/social-icons/x.svg";
import InstagramIcon from "../public/icons/social-icons/instagram.svg";
import LinkedinIcon from "../public/icons/social-icons/linkedIn.svg";
import SnapChatIcon from "../public/icons/social-icons/snapchat.svg";
import YoutubeIcon from "../public/icons/social-icons/youtube.svg";

const navBarLinks: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "#",
  },

  {
    id: 3,
    title: "Services",
    path: "/services",
  },

  {
    id: 4,
    title: "Updates",
    path: "#",
  },

  {
    id: 5,
    title: "Projects",
    path: "#",
  },

  {
    id: 6,
    title: "Contact Us",
    path: "/contact-us",
  },
];

const footerLinks: Menu[] = [
  {
    id: 1,
    title: "Updates",
    path: "#",
  },
  {
    id: 2,
    title: "About Us",
    path: "#",
  },

  {
    id: 3,
    title: "Projects",
    path: "#",
  },

  {
    id: 4,
    title: "Contact Us",
    path: "/contact-us",
  },
];

const socialLink: SocialLinks[] = [
  {
    title: "facebook",
    path: "#",
    iconPath: FacebookIcon,
  },

  {
    title: "twitter",
    path: "#",
    iconPath: XIcon,
  },

  {
    title: "instagram",
    path: "#",
    iconPath: InstagramIcon,
  },

  {
    title: "linkedin",
    path: "#",
    iconPath: LinkedinIcon,
  },

  {
    title: "snapchat",
    path: "#",
    iconPath: SnapChatIcon,
  },

  {
    title: "youtube",
    path: "#",
    iconPath: YoutubeIcon,
  },
];

const advertisementPolicies: SegmentInfo[] = [
  {
    icon: "/icons/policies-icons/policy-1.svg",
    name: "Marketing Policy",
    description:
      "The project’s image will be marketed and enhanced through a sustainable and progressive marketing strategy, driving it to a leading brand in the real estate industry.",
  },

  {
    icon: "/icons/policies-icons/policy-2.svg",
    name: "Analyzing Marketing Trends",
    description:
      "We conduct extensive market research. This involves analyzing market trends, studying consumer preferences, and identifying key demographics.",
  },

  {
    icon: "/icons/policies-icons/policy-3.svg",
    name: "Becoming a Leading Brand",
    description:
      "Our ultimate goal is to establish our brand as a leading force within the real estate industry. Through sustained marketing efforts, we aim to build a strong reputation for excellence, reliability, and innovation.",
  },
];

export { navBarLinks, advertisementPolicies, footerLinks, socialLink };
