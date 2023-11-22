import { Link } from "@remix-run/react";

interface TailwindChallengeLinkProps {
  url: string;
  children: React.ReactNode;
}

const TailwindChallengeLink = ({
  url,
  children,
}: TailwindChallengeLinkProps) => {
  return (
    <Link to={url}>
      <div className="flex justify-center items-center p-8 bg-zinc-200 transition-colors rounded-md w-28 h-28 text-center hover:bg-zinc-300">
        {children}
      </div>
    </Link>
  );
};

export default TailwindChallengeLink;
