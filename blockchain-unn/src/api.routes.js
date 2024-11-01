import axios from "axios";
import { getToken } from "./utils/localStorage";

// const BASE = "https://blockchainunn-backend.onrender.com/api/v3/";
// const BASE = "https://api.blockchainunn.org/api/v3/";
const BASE = "http://127.0.0.1:8000/api/v3/";

// const MAX_RETRIES = 5;
// const RETRY_DELAY = 1000;

// Function to add retry interceptor to an Axios instance
const addRetryInterceptor = (instance) => {
  return instance;
  // instance.interceptors.response.use(
  //   (response) => response,
  //   async (error) => {
  //     const { config } = error;

  //     // Check if network error and if retries are available
  //     if ((!config || !error.response) && config._retryCount < MAX_RETRIES) {
  //       config._retryCount = config._retryCount || 0;
  //       config._retryCount += 1;

  //       // Wait for a defined delay before retrying
  //       await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));

  //       // Retry the request
  //       return instance(config);
  //     }

  //     // Return error if max retries reached or if it's not a network error
  //     return Promise.reject(error);
  //   }
  // );
};

// Custom axios instance based on headers needed
export const customAxios = {
  unprotected: () => {
    const instance = axios.create({
      baseURL: BASE,
    });
    addRetryInterceptor(instance);
    return instance;
  },
  protected: () => {
    try {
      const token = getToken();
      if (!token?.access) throw new Error("Please Log In to continue");

      const headers = {
        Authorization: `Bearer ${token?.access}`,
      };

      const instance = axios.create({
        baseURL: BASE,
        headers: headers,
      });

      addRetryInterceptor(instance);
      return instance;
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

        const instance = axios.create({
          baseURL: BASE,
          headers: headers,
        });

        addRetryInterceptor(instance);
        return instance;
      } catch (error) {
        throw new Error("Please Log In to continue");
      }
    },
    unprotected: () => {
      const instance = axios.create({
        baseURL: BASE,
      });

      addRetryInterceptor(instance);
      return instance;
    },
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
    forgotpassword: "/hackers/blockathon/reset-password",
    forgotpasswordCallback: "/hackers/blockathon/reset-password/callback",
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
  submissions: {
    create: "/submissions/",
    get: "/submissions/",
  },
};
