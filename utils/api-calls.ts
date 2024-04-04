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

export {
  getOfficeAddress,
  getAuthorizedDealers,
  getServices,
  getProjects,
  getEvents,
};
