/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { useMocks } from "@/hooks/useMocks";

import { Spacer } from "@/components/ui/Spacer";

import { LinkCardContainerC } from "../LinkCardContainer";
import { QiitaStyleLinkCardView } from "./View";

const QIITA_STYLE_CODE = ``;

export const QittaStyle: VFC = () => {
  const [{ mockdata }, Switcher] = useMocks();
  const name = "Qiita Style";

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="p-4 text-3xl font-bold text-white">{name}</h1>
      <div className="flex flex-col justify-between items-center py-12 w-full max-w-4xl bg-white rounded-2xl">
        <Switcher />
        <Spacer size={8} />
        <LinkCardContainerC
          View={QiitaStyleLinkCardView}
          name={name}
          code={QIITA_STYLE_CODE}
          mockdata={mockdata}
        />
      </div>
    </div>
  );
};
