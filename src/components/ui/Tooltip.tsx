import { VFC } from "react";

export const Tooltip: VFC = () => {
  return (
    <div className="before:-left-10 z-10 w-fit h-fit bg-black rounded-lg">
      <p className="py-2 px-4 text-white">Copied!</p>
    </div>
  );
};
