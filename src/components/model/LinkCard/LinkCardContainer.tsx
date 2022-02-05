import { FC, VFC } from "react";

import { useToggle } from "@/hooks/useToggle";

import {
  LinkCardContainerProps,
  LinkCardViewProps,
  OgpData,
} from "@/types/LinkCard";

import { Modal } from "@/components/ui/Modal";

export const LinkCardContainer: FC<LinkCardContainerProps> = ({
  children,
  linkCardName,
  code,
}) => {
  const [isModalOpen, open, close] = useToggle();

  return (
    <>
      <div className="flex flex-col items-center p-4 w-full">
        <h1 className="p-4 text-3xl font-bold text-white">{linkCardName}</h1>
        <div
          className="flex justify-center py-12 w-full max-w-4xl bg-white rounded-2xl"
          onClick={open}
        >
          <>
            {children}
            {isModalOpen && (
              <Modal title={linkCardName} code={code} close={close} />
            )}
          </>
        </div>
      </div>
    </>
  );
};

export const LinkCardContainerC: VFC<O> = ({ View, name, code, mockdata }) => {
  const [isModalOpen, open, close] = useToggle();

  return (
    <>
      <View showCode={open} ogp={mockdata} />
      {isModalOpen && <Modal title={name} code={code} close={close} />}
    </>
  );
};

interface O {
  View: VFC<LinkCardViewProps>;
  name: string;
  code: string;
  mockdata: OgpData;
}
