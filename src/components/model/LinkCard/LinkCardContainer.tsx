import { FC, useState } from "react";

import { LinkCardContainerProps } from "@/types/LinkCard";

import { Modal } from "@/components/ui/Modal";

export const LinkCardContainer: FC<LinkCardContainerProps> = ({
  children,
  linkCardName,
  code,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const open = () => {
    setIsModalOpen(true);
  };

  const close = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center p-4 w-full">
        <h1 className="p-4 text-3xl font-bold">{linkCardName}</h1>
        <div className="flex justify-center w-full" onClick={open}>
          {children}
        </div>
      </div>
      {isModalOpen && <Modal code={code} close={close} />}
    </>
  );
};
