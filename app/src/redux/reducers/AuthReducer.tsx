interface AuthState {
    isLoggedIn: boolean;
    token?: string;
  }
  
  const initialState: AuthState = {
    isLoggedIn: false,
    token: undefined,
  };
  
  const authReducer = (state = initialState, action: any): AuthState => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          isLoggedIn: true,
          token: action.payload.token,
        };
      case "LOGOUT":
        return {
          isLoggedIn: false,
          token: undefined,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;