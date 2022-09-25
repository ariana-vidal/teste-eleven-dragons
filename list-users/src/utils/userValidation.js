const validEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return !regex.test(email);
};

const validName = (name) => {
  if (name.length > 3 && name.length < 21) {
    return true;
  }
  
};

const userValidation = (name, email) => !!(
  validName(name) && validEmail(email));

export default userValidation;
