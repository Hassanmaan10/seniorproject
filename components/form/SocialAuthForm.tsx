"use client";

import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      toast.error("Sign in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occurred during Sign in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        className="bg-[#57B251] text-[14px] font-medium leading-[18.2px] min-h-12 flex-1 rounded-[8px] px-4 py-3.5 hover:bg-sky-700"
        onClick={() => handleSignIn("github")}
      >
        <span>Log in with GitHub</span>
      </Button>

      <Button
        className="bg-[#57B251] text-[14px] font-medium leading-[18.2px] min-h-12 flex-1 rounded-[8px] px-4 py-3.5 hover:bg-sky-700"
        onClick={() => handleSignIn("google")}
      >
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
