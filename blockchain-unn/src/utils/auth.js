import { getToken } from "./localStorage";

export function isUserLoggedIn() {
  const token = getToken();
  return token?.access_token ? token : false;
}
