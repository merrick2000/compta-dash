// config/env.js

const env = {
  NODE_ENV: process.env.NODE_ENV,
  APP_ENV: process.env.APP_ENV || "development",
  API_URL: process.env.NEXT_PUBLIC_API_URL,
  // Ajoutez d'autres variables ici
};

// Validation des variables requises
const requiredEnvs = ["API_URL"];
requiredEnvs.forEach((key) => {
  if (!env[key]) {
    throw new Error(`La variable d'environnement ${key} est manquante.`);
  }
});

module.exports = env;
