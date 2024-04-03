import { BASE_URL } from "./constants";

export const getOfficeAddress = async () => {
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

export const getAuthorizedDealers = async () => {
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

export const getServices = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/services?populate=*`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProjects = async () => {
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
