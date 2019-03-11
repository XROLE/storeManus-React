import jwtDecode from 'jwt-decode';

const AuthHelper = {
  decodeToken: (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      return {};
    }
  },
};

export default AuthHelper;
