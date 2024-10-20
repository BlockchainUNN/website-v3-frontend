import axios from "axios";
import { getToken } from "./utils/localStorage";

// const BASE = "https://blockchainunn-backend.onrender.com/api/v3/";
const BASE = "http://160.238.36.159/api/v3/";
// const BASE = "http://127.0.0.1:8000/api/v3/";

// Custom axios instance based on headers needed
export const customAxios = {
  unprotected: () =>
    axios.create({
      baseURL: BASE,
    }),
  protected: () => {
    try {
      const token = getToken();
      if (!token?.access) throw new Error("Please Log In to continue");

      const headers = {
        Authorization: `Bearer ${token?.access}`,
      };
      return axios.create({
        baseURL: BASE,
        headers: headers,
      });
    } catch (error) {
      throw new Error("Please Log In to continue");
    }
  },
  multipartForm: {
    protected: () => {
      try {
        const token = getToken();
        if (!token?.access) throw new Error("Please Log In to continue");

        const headers = {
          Authorization: `Bearer ${token?.access}`,
          "Content-Type": "multipart/form-data",
        };

        return axios.create({
          baseURL: BASE,
          headers: headers,
        });
      } catch (error) {
        throw new Error("Please Log In to continue");
      }
    },
    unprotected: () =>
      axios.create({
        baseURL: BASE,
      }),
  },
};

// Refer to doc @ BASE + "doc/" for proper usage of endpoints
export const API_ROUTES = {
  events: {
    registration: "events/registeration/",
    attendee: "events/attendees/",
    attendeeCount: "/events/attendees/count/",
  },
  hackers: {
    create: "hackers/",
    get: "hackers/",
    login: "hackers/login/",
    count: "/hackers/count/",
  },
  teams: {
    create: "/hackathon/team/",
    get: "/hackathon/team/",
    leave: "/hackathon/team/",
    join: "/hackathon/team/join/",
  },
  users: {
    getByEmail: "users/",
    create: "users/",
  },
};
