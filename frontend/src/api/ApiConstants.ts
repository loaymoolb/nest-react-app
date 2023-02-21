export const ApiConstants = {
  USER: {
    SIGN_UP: "user/signUp",
    DELETE: (userId: number) => {
      return "/user/" + userId;
    }
  },
  LOGIN: "auth/login"
}