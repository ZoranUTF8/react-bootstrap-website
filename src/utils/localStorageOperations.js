const addUserToLocalStorage = (user) => {
  console.log("add user", user);
  localStorage.setItem("user", JSON.stringify(user));
};
const removeUserFromLocalStorage = (user) => {
  localStorage.removeItem("user");
};

const getUserFromLocalStorage = () => {
  const res = localStorage.getItem("user");
  console.log(res);
  const user = res ? JSON.parse(res) : null;
  return user;
};

export {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
};
