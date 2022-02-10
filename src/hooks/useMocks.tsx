import { useReducer, VFC } from "react";

import { mockOgpDataList } from "@/mocks/LinkCard";

export const useMocks = () => {
  type Action = typeof ACTION[number];
  type State = typeof STORE[number];
  type MockdataType = typeof STORE[number]["mockdata"];

  type Reducertype = typeof reducer;

  const STORE = [
    { mockdata: mockOgpDataList[0] },
    { mockdata: mockOgpDataList[1] },
    { mockdata: mockOgpDataList[2] },
    { mockdata: mockOgpDataList[3] },
  ] as const;

  const ACTION = [
    { type: "Normal" },
    { type: "Overflow" },
    { type: "No Icon" },
    { type: "No Img" },
  ] as const;

  const ActionStoreMap = ACTION.map((action, i) => {
    return { action: action, state: STORE[i] };
  });

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ACTION[0].type:
        return STORE[0];
      case ACTION[1].type:
        return STORE[1];
      case ACTION[2].type:
        return STORE[2];
      case ACTION[3].type:
        return STORE[3];
      default:
        return state;
    }
  };

  const [{ mockdata }, dispatch] = useReducer<Reducertype>(reducer, {
    mockdata: mockOgpDataList[0],
  });

  type ReturnType = [
    { mockdata: MockdataType },
    VFC,
    typeof STORE,
    typeof ACTION
  ];

  const Switcher: VFC = () => {
    return (
      <div className="flex">
        {ACTION.map((action) => {
          // ActionStoreMapから、現在のactionと対応するstateを取ってくる
          const currentState = ActionStoreMap.find(
            (item) => item.action === action
          )?.state.mockdata;

          // そのstateがmockdataと一致するか見る
          const isCurrent = currentState === mockdata;
          // 一致したら暗い色、それ以外は明るい色
          const active = "bg-slate-400 text-white font-bold";
          const bgColor = isCurrent ? active : "bg-slate-200";

          return (
            <button
              className={`md:w-20 py-2 md:text-base text-sm w-16  mx-px ${bgColor}`}
              key={action.type}
              onClick={() => dispatch(action)}
            >
              {action.type}
            </button>
          );
        })}
      </div>
    );
  };

  const r: ReturnType = [{ mockdata }, Switcher, STORE, ACTION];

  return r;
};
