const login = async ({ email, password }) => {
  console.log("login user repository");
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  console.log(
    //validation already done
    "register user with: name: " +
      name +
      " eamil: " +
      email +
      " password: " +
      password +
      " phoneNumber: " +
      phoneNumber +
      " address: " +
      address
  );
};

export default {
  login,
  register,
};
