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

  const onClose = () => {
    setU("animate-fade-out");
    setTimeout(() => {
      hidden();
    }, 500);
  };

  return (
    <div
      className={`flex overflow-y-hidden fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75  ${u}`}
    >
      <div
        className={`flex flex-col justify-center items-center py-8 w-4/5 h-4/5 bg-white dark:bg-slate-900 rounded shadow  animate-fade-in  `}
      >
        <h1>このサイトの説明</h1>
        <p>有名サイトのリンクカードを再現しました。</p>
        <button
          onClick={onClose}
          className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300 "
        >
          Close
        </button>
      </div>
    </div>
  );
};
