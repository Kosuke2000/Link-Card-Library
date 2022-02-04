import { useState, VFC } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface ModalProps {
  code: string;
  close: () => void;
}

export const Modal: VFC<ModalProps> = ({ code, close }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75 dark:dark:bg-slate-500/75 ">
      <div className="flex flex-col justify-center p-8 h-4/5 bg-white dark:bg-slate-900 rounded shadow opacity-100 md:w-4/5">
        {copied ? (
          <p className="text-lg text-center" style={{ color: "red" }}>
            Copied!
          </p>
        ) : null}

        <SyntaxHighlighter language="typescript" style={docco}>
          {code}
        </SyntaxHighlighter>
        {/* <Spacer size={32} /> */}
        <div className="flex justify-around w-full">
          <button
            onClick={close}
            className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300"
          >
            Cancel
          </button>
          <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
            <button className="py-2 px-4 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded">
              Copy to clipboard
            </button>
          </CopyToClipboard>

          {/* <button
            onClick={() => copy(code)}
            className="py-2 px-4 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded"
          >
            Copy to clipbord
          </button> */}
        </div>
      </div>
    </div>
  );
};
