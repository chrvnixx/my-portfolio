import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed flex left-0 right-0 top-0 justify-between p-6 text-white items-center  bg-black/30 backdrop-blur-sm ">
      <span className="text-lg text-red font-semibold underline underline-offset-10">
        it's me
      </span>
      <Menu />
    </nav>
  );
}
