import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
export function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center min-h-screen space-y-8">
      <h1 className=" text-4xl font-bold bg-pink-200">Page not found!!!</h1>

      <div className="flex flex-col items-center w-full space-y-4">
        <SignedOut>
          <p>You are not logged in</p>
          <Link
            to={"/login"}
            className="flex justify-center align-content: felx-start bg-pink-400 w-1/2 py-4 uppercase text-black"
          >
            Iniciar sesion
          </Link>
          <SignInButton className="flex justify-center align-content: felx-start bg-pink-400 w-1/2 py-4 uppercase text-black" />
        </SignedOut>

        <SignedIn>
          <p>You are logged in</p>
          <SignOutButton signOutCallback={() => redirect("/")} />
        </SignedIn>
      </div>
    </div>
  );
}
