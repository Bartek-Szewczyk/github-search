const url = "https://api.github.com/users/";

export const getInformation = async (name) => {
  const response = await fetch(url + name);
  return response.json();
};
