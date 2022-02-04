import { useState } from "react";

export const useToggleModal = (): [boolean, () => void, () => void] => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return [isModalOpen, open, close];
};
