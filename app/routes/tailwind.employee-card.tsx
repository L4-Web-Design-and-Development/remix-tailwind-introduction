import employeeCard from "~/assets/jpg/employee-card.jpg";
import EmployeeCard from "~/components/challenges/EmployeeCard";

const BlockGallery = () => {
  return (
    <main className="py-16 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Employee Card
        </h1>
        <p className="text-white mb-4 text-xl max-w-2xl my-auto">
          Open the file at{" "}
          <code className="text-cyan-300">
            app\components\challenges\EmployeeCard.tsx
          </code>{" "}
          to start the challenge...
        </p>
        <p className="text-white mb-8 text-xl max-w-2xl my-auto">
          Can you build the employee card shown in the screenshot below using a
          combination of JSX elements like <code>{"<div>"}</code>,{" "}
          <code>{"<h2>"}</code> <code>{"<p>"}</code>, and Tailwind classes?
        </p>
        <div className="bg-gray-600 mb-8 p-8 rounded border border-gray-400 max-w-xl mx-auto shadow-2xl">
          <img src={employeeCard} alt="Employee Card" className="w-full" />
        </div>
        <p className="text-white mb-4 text-xl max-w-2xl my-auto text-center">
          🔽 Your card will appear below... 🔽
        </p>
        <div className="bg-gray-600 p-8 rounded border border-gray-400 max-w-xl mb-4 mx-auto shadow-2xl">
          <EmployeeCard />
        </div>
      </div>
    </main>
  );
};

export default BlockGallery;
