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

interface Office {
  // attributes: {
  location: string;
  address: string;
  latitude: number;
  longitude: number;
  email: string;
  opening: string;
  closing: string;
  contact_numbers: {
    id: number;
    contact_number: string;
  }[];
  days: {
    id: number;
    Monday: boolean;
    Tuesday: boolean;
    Wednesday: boolean;
    Thursday: boolean;
    Friday: boolean;
    Saturday: boolean;
  };
  // };
}

export type { Menu, SocialLinks, SegmentInfo, Office };
