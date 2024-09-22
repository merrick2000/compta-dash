import client from "./client";
import { API_ROUTES } from "./config";

export async function login(credentials) {
  return client(API_ROUTES.LOGIN, { body: credentials });
}
