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
        className={`flex flex-col justify-center items-center py-8 px-4 w-4/5 h-4/5 bg-white  rounded shadow  animate-fade-in  `}
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
            className="py-2 px-4 font-semibold text-blue-700 hover:text-white bg-transparent hover:bg-blue-500 rounded border border-blue-500 hover:border-transparent"
          >
            Cancel
          </button>
          {copied ? <Tooltip /> : <></>}

          <CopyToClipboard text={code} onCopy={onCopy}>
            <button className="py-2 px-6 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded">
              Copy
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};
