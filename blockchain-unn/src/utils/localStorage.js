import CryptoJS from "crypto-js";

const ACCESS_TOKEN = "ESP_ACCESS_TOKEN";
const SECRET_KEY = "kdfnjknfvjnfjknvnshfvbpkfdkhbvhbdfvkldfhvvhhkdlfhvblhdfk"; // use dotenv

// Token Type: {access: "", refresh: ""}
export function setToken(token) {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(token),
    SECRET_KEY
  ).toString();
  localStorage.setItem(ACCESS_TOKEN, ciphertext);
}

export function getToken() {
  // Todo: Add logic for checking token validity and getting a new token pair when not valid.
  const toDecrypt = localStorage.getItem(ACCESS_TOKEN);
  if (toDecrypt)
    return JSON.parse(
      CryptoJS.AES.decrypt(toDecrypt, SECRET_KEY).toString(CryptoJS.enc.Utf8)
    );
  return null;
}
