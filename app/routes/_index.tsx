import type { MetaFunction } from "@remix-run/node";

import TailwindChallengeLink from "~/components/landing-page/TailwindChallengeLink";

export const meta: MetaFunction = () => [
  { title: "Remix Tailwind Starter Project" },
];

export default function Index() {
  return (
    <main className="p-16 relative min-h-screen sm:flex sm:items-center sm:justify-center">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="max-w-4xl flex flex-col items-center justify-center">
            <h1 className="text-6xl leading-normal font-semibold text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-300 via-purple-300 to-stone-600 sm:text-center">
              Getting started with Remix and Tailwind
            </h1>
            <p className="text-white text-center text-xl mt-8">
              Click a link below to open the challenge...
            </p>
          </div>
          <div className="mt-8 overflow-hidden shadow sm:rounded-lg">
            <div className="grid grid-cols-3 gap-4">
              <TailwindChallengeLink url="/tailwind/shades-of-blue">
                <p className="text-center text-sm font-semibold tracking-wide text-purple-950">
                  Shades of blue
                </p>
              </TailwindChallengeLink>
              <TailwindChallengeLink url="/tailwind/buttons">
                <p className="text-center text-sm font-semibold tracking-wide text-purple-950">
                  Buttons
                </p>
              </TailwindChallengeLink>
              <TailwindChallengeLink url="/tailwind/block-gallery">
                <p className="text-center text-sm font-semibold tracking-wide text-purple-950">
                  Block gallery
                </p>
              </TailwindChallengeLink>
              <TailwindChallengeLink url="/tailwind/input-component">
                <p className="text-center text-sm font-semibold tracking-wide text-purple-950">
                  Input component
                </p>
              </TailwindChallengeLink>
              <TailwindChallengeLink url="/tailwind/employee-card">
                <p className="text-center text-sm font-semibold tracking-wide text-purple-950">
                  Employee card
                </p>
              </TailwindChallengeLink>
              <TailwindChallengeLink url="/tailwind/instructor-card">
                <p className="text-center text-sm font-semibold tracking-wide text-purple-950">
                  Responsive Instructor Card
                </p>
              </TailwindChallengeLink>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
