const InputComponent = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-16">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Input Component
        </h1>
        <p className="text-white mb-4 text-xl">
          Open the file at{" "}
          <code className="text-cyan-300">
            app\routes\tailwind.input-component.tsx
          </code>{" "}
          and read the challenge...
        </p>
        <div className="flex flex-col bg-white/75 border border-white p-16">
          {/* 
            1. Label text should be small, bold, dark gray and not selectable by the user - https://tailwindcss.com/docs/font-size, https://tailwindcss.com/docs/font-weight, https://tailwindcss.com/docs/text-color and https://tailwindcss.com/docs/user-select
          */}
          <label className="" htmlFor="full_name">
            {" "}
            Full Name{" "}
          </label>

          {/* 
            2. Input has top margin of 8px - https://tailwindcss.com/docs/margin
            3. Drop shadow - https://tailwindcss.com/docs/drop-shadow,
            4. Border width 1px indigo colour all way round - https://tailwindcss.com/docs/border-width and https://tailwindcss.com/docs/border-color,
            5. Large rounded corners - https://tailwindcss.com/docs/border-radius,
            6. Width of 50% - https://tailwindcss.com/docs/width,
            7. Moderate padding that is wider than it is tall - https://tailwindcss.com/docs/padding,
            8. Dark gray text - https://tailwindcss.com/docs/text-color,
            9. Light indigo placeholder text colour - https://tailwindcss.com/docs/placeholder-color,
            10. On focus, the background should turn light blue and have a 1px blue border all round - https://tailwindcss.com/docs/hover-focus-and-other-states#focus, https://tailwindcss.com/docs/background-color, https://tailwindcss.com/docs/border-width and https://tailwindcss.com/docs/border-color
            11. 16px padding all round - https://tailwindcss.com/docs/padding
          */}
          <input
            id="full_name"
            placeholder="Enter your full name"
            className=""
          />

          {/* 
            11. Button has top margin of 8px - https://tailwindcss.com/docs/margin,
            12. Moderate padding that is wider than it is tall - https://tailwindcss.com/docs/padding,
            13. Dark blue background - https://tailwindcss.com/docs/background-color,
            14. Light blue text - https://tailwindcss.com/docs/text-color,
            15. Large rounded corners - https://tailwindcss.com/docs/border-radius
          */}
          <button className="">Save</button>
        </div>
      </div>
    </main>
  );
};

export default InputComponent;
