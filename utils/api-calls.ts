import { BASE_URL } from "./constants";

export const getOfficeAddress = async () => {
  try {
    // http://127.0.0.1:1337/api/office?populate=*
    const response = await fetch(`${BASE_URL}/api/office?populate=*`, {
      cache: "no-store",
    });

    const data = await response.json();
    return data?.data?.attributes;
  } catch (error) {
    console.error(error);
  }
};
