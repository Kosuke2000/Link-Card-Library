import { useState, VFC } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { Spacer } from "./Spacer";
import { Tooltip } from "./Tooltip";

interface ModalProps {
  title: string;
  code: string;
  close: () => void;
}

export const Modal: VFC<ModalProps> = ({ title, code, close }) => {
  const [copied, setCopied] = useState(false);
  const [u, setU] = useState("");

  const onCopy = () => {
    setCopied(true);
    setU("animate-fade-out");
    setTimeout(() => {
      close();
      setCopied(false);
    }, 500);
  };

  const onCancel = () => {
    setU("animate-fade-out");
    setTimeout(() => {
      close();
    }, 500);
  };

  return (
    <div
      className={`flex overflow-y-hidden fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75  ${u}`}
    >
      <div
        className={`flex flex-col justify-center items-center py-8 w-4/5 h-4/5 bg-white dark:bg-slate-900 rounded shadow  animate-fade-in  `}
      >
        <h2 className="pb-6 text-2xl font-bold">{title}</h2>
        <SyntaxHighlighter
          className="w-11/12"
          language="typescript"
          style={docco}
        >
          {code}
        </SyntaxHighlighter>
        <Spacer size={8} />
        <div className="flex justify-between w-full max-w-md">
          <button
            onClick={onCancel}
            className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300 "
          >
            Cancel
          </button>
          {copied ? <Tooltip /> : <></>}

          <CopyToClipboard text={code} onCopy={onCopy}>
            <button className="py-2 px-6 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded">
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};
