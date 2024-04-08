import { BASE_URL } from "./constants";

const getOfficeAddress = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/office?populate=*`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data?.attributes;
  } catch (error) {
    console.error(error);
  }
};

const getAuthorizedDealers = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/authorized-dealer?populate=*`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json();
    return data?.data?.attributes;
  } catch (error) {
    console.error(error);
  }
};

const getServices = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/services?populate=*&sort[1]=id`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

const getProjects = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/projects?populate=*&sort[1]=id`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

const getEvents = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/events?populate=*`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

const getTeam = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/teams?populate=*`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

const getGallery = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/gallery?populate=*`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

const getAssociatesGroup = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/assoc-group-medias?populate=*&sort[1]=id`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

const getBannerImages = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/home-banner-images?populate=*`,
      {
        cache: "no-store",
      },
    );

    const data = await response.json();
    return data?.data?.attributes;
  } catch (error) {
    console.error(error);
  }
};

export {
  getOfficeAddress,
  getAuthorizedDealers,
  getServices,
  getProjects,
  getEvents,
  getTeam,
  getBannerImages,
  getAssociatesGroup,
  getGallery,
};
