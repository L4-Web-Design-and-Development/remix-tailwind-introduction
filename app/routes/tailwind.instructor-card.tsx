import instructorCard from "~/assets/jpg/001-instructor-design-mobile.png";
import instructorCardDesktop from "~/assets/jpg/002-instructor-design-desktop.png";
import instructorCodeScreenshot from "~/assets/jpg/003-instructor-component-code.png";
import instructorCardsScreenshot from "~/assets/jpg/003-instructor-component-screenshot.png";
import InstructorCard from "~/components/challenges/InstructorCard";

const InstructorCardPage = () => {
  return (
    <main className="py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Responsive Instructor Card
        </h1>
        <p className="text-white mb-4 text-xl max-w-2xl mx-auto">
          Open the file at{" "}
          <code className="text-cyan-300">
            app\components\challenges\Page/index.tsx
          </code>{" "}
          to start the challenge...
        </p>
        <p className="text-white mb-4 text-xl max-w-2xl mx-auto">
          Can you build the instructor card shown in the screenshot below using
          a combination of JSX elements like <code>{"<div>"}</code>,{" "}
          <code>{"<h2>"}</code> <code>{"<p>"}</code>, and Tailwind classes?
        </p>
        <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
          Click{" "}
          <a
            href="https://create-react-app.dev/docs/adding-images-fonts-and-files/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:text-cyan-400"
          >
            here
          </a>{" "}
          to learn how to import and use images in React.
        </p>
        <div className="bg-gray-600 mb-8 p-8 rounded border border-gray-400 max-w-xl mx-auto shadow-2xl">
          <img
            src={instructorCard}
            alt="Instructor Card Mobile Design"
            className="w-full"
          />
        </div>
        <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
          All the images needed complete the design can be found inside{" "}
          <code className="text-cyan-300">
            app\components\challenges\InstructorCard\img
          </code>
          .
        </p>
        <p className="text-white mb-4 text-xl max-w-2xl mx-auto text-center">
          🔽 Your card will appear below... 🔽
        </p>
        <div className="bg-gray-600 p-8 rounded border border-gray-400 w-full mb-8 mx-auto shadow-2xl">
          <InstructorCard />
        </div>

        <div className="bg-zinc-950 p-8 rounded border border-gray-400 w-full mb-8 mx-auto shadow-2xl max-w-4xl lg:p-16">
          <h2 className="text-3xl text-white tracking-wide mb-8 text-center font-bold">
            🚀 Extra Credit 1 🚀
          </h2>
          <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
            Can you update the TailwindCSS classes to make the card change to
            the desktop design when the screen is wider than 1024px? (click{" "}
            <a
              href="https://tailwindcss.com/docs/responsive-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-400"
            >
              here
            </a>{" "}
            for a hint).
          </p>

          <div className="bg-gray-600 mb-16 p-8 rounded border border-gray-400 w-full mx-auto shadow-2xl">
            <img
              src={instructorCardDesktop}
              alt="Instructor Card Desktop Design"
              className="w-full"
            />
          </div>

          <h2 className="text-3xl text-white tracking-wide mb-8 text-center font-bold">
            🚀🚀 Extra Credit 2 🚀🚀
          </h2>
          <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
            Can you make the <code>InstructorCard</code> React component
            resusable for multiple different instructors?
          </p>
          <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
            Click{" "}
            <a
              href="https://react.dev/learn/passing-props-to-a-component"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-400"
            >
              here
            </a>{" "}
            to learn how to use props in React to build reusable components.
          </p>
          <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
            The finished custom component should be callable like this:
          </p>
          <div className="bg-gray-600 mb-8 p-8 rounded border border-gray-400 max-w-2xl mx-auto shadow-2xl">
            <img
              src={instructorCodeScreenshot}
              alt="Instructor Card Component Code"
              className="w-full"
            />
          </div>
          <p className="text-white mb-8 text-xl max-w-2xl mx-auto">
            Which would produce something like this in the browser:
          </p>
          <div className="bg-gray-600 mb-4 p-8 rounded border border-gray-400 w-full mx-auto shadow-2xl">
            <img
              src={instructorCardsScreenshot}
              alt="Multiple Instructor Cards"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default InstructorCardPage;
