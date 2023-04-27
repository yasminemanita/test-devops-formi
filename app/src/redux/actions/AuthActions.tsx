
export const loginSuccess = (token:String) => ({
    type: "LOGIN_SUCCESS",
    payload: { token },
  });
  
  export const logout = () => ({
    type: "LOGOUT",
  });