import { CheckIcon, CircleIcon, StarIcon, WavesIcon } from "lucide-react";
import React from "react";

export default function Homepage() {
  return (
    <div className="p-6">
      <div className="mt-20">
        <span className="text-2xl">✋🏻</span>
        <h1 className="text-4xl font-bold tracking-wide">
          Hello! <br />
          I'm Emmanuel
        </h1>
      </div>

      <div className="flex items-center mt-3">
        <hr className="border border-primary w-15  " />
        <span className="ml-2 font-bold text-white/60 font-mono">
          FullStack Developer
        </span>
        <StarIcon className="size-4 ml-3 animate-[spin_10s_linear_infinite]" />
      </div>

      <p className="mt-5 font-extralight text-md tracking-tight">
        Hello! I’m Emmanuel. I’m a{""}
        <strong className="font-bold text-accent">
          {" "}
          FullStack Developer
        </strong>{" "}
        {""}
        who <em className="font-bold text-accent">aggresively</em> loves what he
        does, gains experince frequently as i take every opportunity to learn
        always & a human-loving introvert.
      </p>

      <div>
        <CheckIcon />
      </div>
    </div>
  );
}
