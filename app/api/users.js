import client from "./client";
import { API_ROUTES } from "./config";

export async function getUsers() {
  return client(API_ROUTES.USERS);
}

export async function getUser(id) {
  return client(`${API_ROUTES.USERS}/${id}`);
}

// Add other user-related API calls here
