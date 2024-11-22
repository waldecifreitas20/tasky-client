import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { SignUpPage } from "../pages/signup/SignUpPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />
  },
]);

export type AppPage = "/login" | "/sign-up" | "/";

export const goToPage = (page: AppPage) => {
  location.pathname = page;
}