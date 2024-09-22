import { API_CONFIG } from "./config";

async function client(endpoint, { body, ...customConfig } = {}) {
  const headers = { ...API_CONFIG.headers };
  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  let data;
  try {
    const response = await fetch(endpoint, config);
    data = await response.json();
    if (response.ok) {
      return data;
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

export default client;
