import { useState, VFC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
      className={`flex overflow-y-hidden px-4 fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen  bg-slate-200/75  ${u}`}
    >
      <div
        className={`flex flex-col justify-center items-center md:w-96 py-4 min-w-min  min-h-max bg-white   shadow  animate-fade-in rounded-lg `}
      >
        <div className="flex flex-col items-center pb-5">
          <h1 className="p-3 text-xl font-semibold text-center">Overview</h1>
          <p className="px-8 text-center ">
            Click and get the code of the link card. We styled them with
            Tailwind CSS.
          </p>
          <p className="p-3 pb-5 text-xl font-semibold text-center">
            Type of ogp in the snippet is:
          </p>
          <SyntaxHighlighter
            className="w-11/12"
            language="typescript"
            style={docco}
          >
            {CODE}
          </SyntaxHighlighter>
        </div>
        <button
          onClick={onHidden}
          className="py-2 px-4 font-semibold text-blue-700 hover:text-white bg-transparent hover:bg-blue-500 rounded border border-blue-500 hover:border-transparent"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const CODE = `{
   title: string;
   description: string;
   faviconUrl: string;
   pageUrl: string;
   ogImgUrl: string;
 };`;
