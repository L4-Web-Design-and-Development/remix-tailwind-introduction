const BlockGallery = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-16">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Block Gallery
        </h1>
        <p className="text-white mb-4 text-xl">
          Open the file at{" "}
          <code className="text-cyan-300">
            app\routes\tailwind.block-gallery.tsx
          </code>{" "}
          and read the challenge...
        </p>
        {/*
          --------------------------------------
          1. Parent div must be 100% width - https://tailwindcss.com/docs/width
          2. Parent div must have an evenly distributed 3 column grid - https://tailwindcss.com/docs/grid-template-columns
          3. Each square inside the parent div must be 96px wide and 96px tall - https://tailwindcss.com/docs/width and https://tailwindcss.com/docs/height
          4. There must be an 8px gap between each square - https://tailwindcss.com/docs/gap
          5. Each square must have a 4px border radius - https://tailwindcss.com/docs/border-radius
          6. Letters in each square must be centered on the square vertically and horizontally - https://tailwindcss.com/docs/flex, https://tailwindcss.com/docs/justify-content and https://tailwindcss.com/docs/align-items
          7. Letters in each square must be bold - https://tailwindcss.com/docs/font-weight
          --------------------------------------
        */}
        <div className="grid place-items-center">
          <div className="bg-teal-100">A</div>
          <div className="bg-teal-200">B</div>
          <div className="bg-teal-300">C</div>
          <div className="bg-teal-400">D</div>
          <div className="bg-teal-500">E</div>
          <div className="bg-teal-600">F</div>
          <div className="bg-teal-700">G</div>
          <div className="bg-teal-800">H</div>
          <div className="bg-teal-900">I</div>
        </div>
      </div>
    </main>
  );
};

export default BlockGallery;
