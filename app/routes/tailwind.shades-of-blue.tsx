const ShadesOfBlue = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Shades of Blue
        </h1>
        <p className="text-white mb-4 text-xl">
          Open the file at{" "}
          <code className="text-cyan-300">
            app\routes\tailwind.shades-of-blue.tsx
          </code>{" "}
          and read the challenge...
        </p>
        <div className="grid grid-cols-5 gap-4">
          {/*
          --------------------------------------
          1. Create 10 boxes below that are 80px wide by 80px tall - https://tailwindcss.com/docs/width 
          2. Each box should represent a shade of the blue color scheme - https://tailwindcss.com/docs/background-color#blue
          3. The first box should be the lightest shade of blue
          4. The last box should be the darkest shade of blue
          5. Each box should have a border radius of 4px - https://tailwindcss.com/docs/border-radius
          --------------------------------------
        */}
        </div>
      </div>
    </main>
  );
};

export default ShadesOfBlue;
