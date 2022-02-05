import { useReducer, VFC } from "react";

import { mockOgpDataList } from "@/mocks/LinkCard";

export const useMocks = () => {
  type Action = typeof ACTION[number];
  type State = typeof STORE[number];
  type MockdataType = typeof STORE[number]["mockdata"];

  type Reducertype = typeof reducer;
  type Dispatch<A> = (value: A) => void;

  const STORE = [
    { mockdata: mockOgpDataList[0] },
    { mockdata: mockOgpDataList[1] },
    { mockdata: mockOgpDataList[2] },
  ] as const;

  const ACTION = [
    { type: "normal" },
    { type: "longtitle" },
    { type: "nofav" },
  ] as const;

  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case ACTION[0].type:
        return STORE[0];
      case ACTION[1].type:
        return STORE[1];
      case ACTION[2].type:
        return STORE[2];
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
      <>
        {ACTION.map((action) => (
          <button key={action.type} onClick={() => dispatch(action)}>
            {action.type}
          </button>
        ))}
      </>
    );
  };

  const r: ReturnType = [{ mockdata }, Switcher, STORE, ACTION];

  return r;
};
