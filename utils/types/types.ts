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
}

type Images = {
  attributes: {
    url: string;
  };
};

interface DealersData {
  title: string;
  dealer_images: {
    data: Images[];
  };
}

interface ProfessionalServices {
  attributes: {
    name: string;
    description: string;
    icon: {
      data: Images;
    };
  };
}

interface TeamMembers {
  id: number;
  attributes: {
    member_name: string;
    member_designation: string;
    member_company: string;
    member_image: {
      data: Images;
    };
  };
}
interface RSProjects {
  id: number;
  attributes: {
    title: string;
    description: string;
    city: string;
    thumbnail_image: {
      data: Images;
    };
    images: {
      data: Images[];
    };
  };
}

interface Events {
  id: number;
  attributes: {
    title: string;
    description: string;
    location: string;
    date: string;
    host: string;
    event_images: {
      data: Images[];
    };
  };
}

interface HomePageGallery {
  data: Images;
}

export type {
  Menu,
  SocialLinks,
  SegmentInfo,
  Office,
  DealersData,
  ProfessionalServices,
  RSProjects,
  HomePageGallery,
  Images,
  TeamMembers,
  Events,
};
