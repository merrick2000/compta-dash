import { useMemo } from "react";
import env from "../config/env";

export function useEnv() {
  return useMemo(
    () => ({
      ...env,
      isDevelopment: env.NODE_ENV === "development",
      isProduction: env.NODE_ENV === "production",
      isTest: env.NODE_ENV === "test",
    }),
    []
  );
}
