import APIconfig from "./config";

// queryParams - this is a line like "page=1&language=en-US&limit=10"

export const makeGetRequest = async (url: string, queryParams = "") => {
  const response = await fetch(
    `${APIconfig.baseURL + url}?api_key=${APIconfig.APIkey}${
      queryParams && `&${queryParams}`
    }`
  );
  const data = await response.json();
  return data;
};

export const makePostRequest = async (
  url: string,
  body?: any,
  queryParams = ""
) => {
  const response = await fetch(
    `${APIconfig.baseURL + url}?api_key=${APIconfig.APIkey}${
      queryParams && `&${queryParams}`
    }`,
    {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};

export const makeDeleteRequest = async (
  url: string,
  body?: any,
  queryParams = ""
) => {
  const response = await fetch(
    `${APIconfig.baseURL + url}?api_key=${APIconfig.APIkey}${
      queryParams && `&${queryParams}`
    }`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
};
