import { VFC } from "react";

import { useMocks } from "@/hooks/useMocks";
import { useToggle } from "@/hooks/useToggle";

import { LinkCardViewProps } from "@/types/LinkCard";

import { Modal } from "@/components/ui/Modal";
import { Spacer } from "@/components/ui/Spacer";

interface O {
  name: string;
  View: VFC<LinkCardViewProps>;
  code: string;
}

export const LinkCardContainerC: VFC<O> = ({ name, View, code }) => {
  const [{ mockdata }, Switcher] = useMocks();
  const [isOpen, open, close] = useToggle();

  return (
    <div className="flex flex-col items-center p-8 w-full">
      <h1 className="p-4 text-2xl font-semibold text-white md:text-3xl">
        {name}
      </h1>
      <div className="flex flex-col justify-between items-center py-12 px-4 w-full max-w-4xl bg-white rounded-2xl">
        <Switcher />
        <Spacer size={8} />
        <View showCode={open} ogp={mockdata} />
        {isOpen && <Modal title={name} code={code} close={close} />}
      </div>
    </div>
  );
};
