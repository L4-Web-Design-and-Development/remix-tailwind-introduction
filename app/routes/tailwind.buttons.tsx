const Buttons = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white">Buttons</h1>
        <p className="text-white mb-4 text-xl">
          Open the file at{" "}
          <code className="text-cyan-300">app\routes\tailwind.buttons.tsx</code>{" "}
          and read the challenge...
        </p>
        <div className="grid grid-cols-4 gap-4 bg-zinc-200/75 p-8 bg">
          {/*
          --------------------------------------
          Style the buttons below so they match the descriptions above each with Tailwind classes
          --------------------------------------
        */}

          {/*
            1. dark blue background - https://tailwindcss.com/docs/background-color,
            2. light blue text - https://tailwindcss.com/docs/text-color,
            3. 4px border radius - https://tailwindcss.com/docs/border-radius,
            4. 4px light blue left border - https://tailwindcss.com/docs/border-width and https://tailwindcss.com/docs/border-color,
            5. 32px padding left and right, 16px padding top and bottom - https://tailwindcss.com/docs/padding,
        */}
          <div>
            <button className="">Submit</button>
          </div>

          {/* 
            1. red text - https://tailwindcss.com/docs/text-color,
            2. 2px red border - https://tailwindcss.com/docs/border-width and https://tailwindcss.com/docs/border-color
            3. light red background - https://tailwindcss.com/docs/background-color,
            4. 32px padding left and right, 16px padding top and bottom - https://tailwindcss.com/docs/padding,
        */}
          <div>
            <button className="">Cancel</button>
          </div>

          {/* 
            1. light indigo background - https://tailwindcss.com/docs/background-color,
            2. indigo bottom border 2px - https://tailwindcss.com/docs/border-width and https://tailwindcss.com/docs/border-color,
            3. indigo text - https://tailwindcss.com/docs/text-color,
            4. 32px padding left and right, 16px padding top and bottom - https://tailwindcss.com/docs/padding,
        */}
          <div>
            <button className="">Save</button>
          </div>

          {/* 
            1. 8px border radius - https://tailwindcss.com/docs/border-radius,
            2. 32px padding left and right, 16px padding top and bottom - https://tailwindcss.com/docs/padding,
            3. 24px font size - https://tailwindcss.com/docs/font-size,
            4. 600 font weight - https://tailwindcss.com/docs/font-weight,
            5. uppercase - https://tailwindcss.com/docs/text-transform,
            6. white text - https://tailwindcss.com/docs/text-color,
            7. dark green background - https://tailwindcss.com/docs/background-color,
            8. lighter green hover background - https://tailwindcss.com/docs/hover-focus-and-other-states#hover,
        */}
          <div>
            <button className="">Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Buttons;
