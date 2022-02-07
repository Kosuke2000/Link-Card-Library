import { useState, VFC } from "react";

export const useDesc = () => {
  const [appearDesc, setDesc] = useState(false);

  const appear = () => {
    setDesc(true);
  };

  const hidden = () => {
    setDesc(false);
  };

  type ReturnType = [boolean, () => void, () => void];
  const r: ReturnType = [appearDesc, appear, hidden];

  return r;
};

interface DescProps {
  hidden: () => void;
}

export const Desc: VFC<DescProps> = ({ hidden }) => {
  const [u, setU] = useState("");

  const onHidden = () => {
    setU("animate-fade-out");
    setTimeout(() => {
      hidden();
    }, 500);
  };

  return (
    <div
      onClick={onHidden}
      className={`flex overflow-y-hidden px-4 fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75  ${u}`}
    >
      <div
        className={`flex flex-col justify-center items-center px-8 w-96  h-96 bg-white dark:bg-slate-900  shadow  animate-fade-in rounded-lg `}
      >
        <div className="flex flex-col items-center pb-5">
          <h1 className="p-3 text-3xl font-semibold text-center">
            Site Description
          </h1>
          <p className="text-center">
            Reproduced the link cards of famous sites.
          </p>
          <p className="text-center">Click on the link card to see the code.</p>
          <p className="text-center">
            Tailwind CSS in React with eslint-plugin-tailwindcss.
          </p>
        </div>
        <button
          onClick={onHidden}
          className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300 "
        >
          Close
        </button>
      </div>
    </div>
  );
};
