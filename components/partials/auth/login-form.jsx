import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Checkbox from "@/components/ui/Checkbox";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { login } from "@/app/api/auth";

// Constantes pour les erreurs
const ERROR_TYPES = {
  BAD_REQUEST: "Bad Request",
  UNAUTHORIZED: "Unauthorized",
  NOT_FOUND: "Not Found",
  SERVER_ERROR: "Internal Server Error",
};

const schema = yup
  .object({
    username: yup.string().required("Username is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const user = await login(data);
      dispatch(handleLogin(user));
      router.push("/envoie");
    } catch (error) {
      if (error === ERROR_TYPES.BAD_REQUEST) {
        const errorData = error.response ? await error.response.json() : {};
        if (
          errorData.non_field_errors &&
          errorData.non_field_errors.length > 0
        ) {
          setErrorMessage(errorData.non_field_errors[0]);
        } else {
          setErrorMessage("Invalid credentials");
        }
      } else if (error === ERROR_TYPES.UNAUTHORIZED) {
        setErrorMessage("Unauthorized access. Please check your credentials.");
      } else if (error === ERROR_TYPES.NOT_FOUND) {
        setErrorMessage("The requested resource was not found.");
      } else if (error === ERROR_TYPES.SERVER_ERROR) {
        setErrorMessage("A server error occurred. Please try again later.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <Textinput
          name="username"
          label="Username"
          type="text"
          register={register}
          error={errors?.username}
        />
        <Textinput
          name="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password}
        />
        <div className="flex justify-between">
          <Checkbox
            value={checked}
            onChange={() => setChecked(!checked)}
            label="Keep me signed in"
          />
          <Link
            href="/forgot-password"
            className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
          >
            Forgot Password?{" "}
          </Link>
        </div>

        <button
          className="btn btn-dark block w-full text-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Sign in"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
