type Menu = {
  id: number;
  title: string;
  path: string;
};

type SocialLinks = Omit<Menu, "id"> & { iconPath: string };

type SegmentInfo = {
  icon: string;
  name: string;
  description: string;
};

export type { Menu, SocialLinks, SegmentInfo };
