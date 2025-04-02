import SocialAuthForm from "@/components/form/SocialAuthForm";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F6F9FF]">
      <section className="min-w-full rounded-[10px] border-[#F4F6F8] border px-4 py-10 shadow-md sm:min-w-[300px] sm:px-8  ">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-2.5">
            <h1 className="font-bold text-[#157CDF]">Join LocateX</h1>
            <p className="text-[16px] text-[#2F2F2F] font-normal leading-[22.4px]">
              To locate your item
            </p>
          </div>
        </div>
        {children}
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
