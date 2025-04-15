import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Navbar = () => {
  return (
    <nav className="bg-gradient-light w-full custom-blur fixed z-50 p-6 flex justify-between items-center ">
      <Link href="/" className="">
        <p className="font-medium text-5xl text-white max-md:text-2xl">
          Locate
          <span className="font-bold">X</span>
        </p>
      </Link>

      <p className="max-lg:hidden">Links</p>

      <Button className="bg-forest-green-850 text-2xl p-6 hover:bg-sky-700">
        <Link href={ROUTES.SIGN_IN}>Sign In</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
