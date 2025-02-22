export const fetchGitLinks = async () => {
  const response = await fetch("https://api.github.com/users/aditya-chebrolu/repos");
  const data = await response.json();
  return data;
};

// fetch all the links from a specific list of repos
export const fetchGitList = async (listName: string) => {
  const response = await fetch(`https://api.github.com/users/aditya-chebrolu/repos/${listName}`);
  const data = await response.json();
  return data;
};
