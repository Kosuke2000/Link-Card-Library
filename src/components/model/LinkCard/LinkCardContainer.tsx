import { FC, VFC } from "react";

import { useMocks } from "@/hooks/useMocks";
import { useToggle } from "@/hooks/useToggle";

import { LinkCardContainerProps, LinkCardViewProps } from "@/types/LinkCard";

import { Modal } from "@/components/ui/Modal";
import { Spacer } from "@/components/ui/Spacer";

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

interface O {
  name: string;
  View: VFC<LinkCardViewProps>;
  code: string;
}

export const LinkCardContainerC: VFC<O> = ({ name, View, code }) => {
  const [{ mockdata }, Switcher] = useMocks();
  const [isModalOpen, open, close] = useToggle();

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="p-4 text-3xl font-bold text-white">{name}</h1>
      <div className="flex flex-col justify-between items-center py-12 px-4 w-full max-w-4xl bg-white rounded-2xl">
        <Switcher />
        <Spacer size={8} />
        <View showCode={open} ogp={mockdata} />
        {isModalOpen && <Modal title={name} code={code} close={close} />}
      </div>
    </div>
  );
};
