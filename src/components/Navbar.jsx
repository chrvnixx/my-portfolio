import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed flex right-0 left-0 justify-between p-6 text-white items-center">
      <span className="text-lg font-semibold underline underline-offset-10">
        it's me
      </span>
      <Menu />
    </nav>
  );
}
