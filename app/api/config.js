const API_BASE_URL = "/api";

export const API_ROUTES = {
  LOGIN: `${API_BASE_URL}/users/login`,
  USERS: `${API_BASE_URL}/users`,
  // Add other API routes here
};

export const API_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers here
  },
};
