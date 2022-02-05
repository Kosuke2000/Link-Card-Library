import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  type ReturnType = [boolean, () => void, () => void];
  const r: ReturnType = [isOpen, open, close];

  return r;
};
