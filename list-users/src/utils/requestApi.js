export const usersAPI = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/users');
    const users = await response.json();
    return users;
  };