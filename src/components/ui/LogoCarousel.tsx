"use client";

import Image from "next/image";

const clientLogo = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
];

export default function LogoCarousel() {
  return (
    <>
      <div className="p-8">
        <h2 className="text-center text-text-main text-3xl md:text-4xl font-bold leading-8 ">
          <span className="text-primary">Our</span> Clients
        </h2>
        <p className="text-center text-text-sub text-base leading-6 mt-3">
          We are proud to be trusted by some of the world’s most innovative and
          forward-thinking teams.
        </p>
      </div>
      <div className="relative md:w-6xl overflow-hidden pb-5 container my-8 mx-auto px-5">
        <div className="flex animate-scroll -z-50 hover:[animation-play-state:paused]">
          {[...clientLogo, ...clientLogo].map((tech, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 min-w-max group"
            >
              <Image
                src={tech}
                alt={`logo-${index}`}
                width={50}
                height={50}
                className="object-contain transition-all  group-hover:scale-110 duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
