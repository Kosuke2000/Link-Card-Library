import { VFC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

/*
 - 全体に薄く広がる暗めの背景
   - タッチするとモーダルはキャンセルとして閉じる
 - 画面の真ん中に表示されるモーダル
   - ゴチの人の名前
   - その人の現在の金額
   - キャンセルボタン (close)
   - ゴチボタン (proceed)
*/

interface ModalProps {
  code: string;
  close: () => void;
}

export const Modal: VFC<ModalProps> = ({ code, close }) => {
  const copy = (code: string) => {
    // ここでコードをコピーする
    console.log(code);
  };

  return (
    <div className="flex fixed top-0 left-0 z-10 justify-center items-center w-screen h-screen bg-slate-200/75 dark:dark:bg-slate-500/75 ">
      <div className="flex flex-col justify-center p-4 h-2/3 bg-white dark:bg-slate-900 rounded shadow opacity-100 md:w-4/5">
        <SyntaxHighlighter language="typescript" style={docco}>
          {code}
        </SyntaxHighlighter>
        <div className="flex justify-around w-full">
          <button
            onClick={close}
            className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300"
          >
            Cancel
          </button>
          <button
            onClick={() => copy(code)}
            className="py-2 px-4 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded"
          >
            Copy to clipbord
          </button>
        </div>
      </div>
    </div>
    // <div>
    //   <p>{code}</p>
    //   <button
    //     onClick={close}
    //     className="py-2 px-4 font-semibold text-blue-700 hover:text-white dark:text-white bg-transparent hover:bg-blue-500 dark:hover:bg-slate-800 rounded border border-blue-500 hover:border-transparent dark:border-yellow-300"
    //   >
    //     閉じる
    //   </button>
    //   <button
    //     onClick={() => copy(code)}
    //     className="py-2 px-4 font-bold text-white dark:text-slate-700 bg-blue-500 hover:bg-blue-700 dark:bg-yellow-300 dark:hover:bg-yellow-500 rounded"
    //   >
    //     コピーする
    //   </button>
    // </div>
  );
};
