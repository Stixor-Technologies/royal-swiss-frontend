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

// export const getServices = async () => {
//   try {
//     // Wrap the fetch operation in a promise
//     return new Promise((resolve, reject) => {
//       setTimeout(async () => {
//         try {
//           const response = await fetch(`${BASE_URL}/api/services?populate=*`, {
//             cache: "no-store",
//           });

//           const data = await response.json();
//           resolve(data?.data);
//         } catch (error) {
//           console.error(error);
//           reject(error);
//         }
//       }, 10000); // 5000 milliseconds = 5 seconds
//     });
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
