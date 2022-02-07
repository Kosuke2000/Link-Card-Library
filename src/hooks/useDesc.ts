import { useState } from "react";

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
