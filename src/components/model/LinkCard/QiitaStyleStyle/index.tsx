/* eslint-disable @next/next/no-img-element */

import { useMocks } from "@/hooks/useMocks";

import { LinkCardContainer } from "../LinkCardContainer";
import { QiitaStyleLinkCardView } from "./View";

export const QiitaStyleLinkCard = () => {
  const [{ mockdata }, Switcher] = useMocks();

  return (
    <>
      <LinkCardContainer linkCardName="Qiita style" code={QIITA_STYLE_CODE}>
        <Switcher />
        <QiitaStyleLinkCardView ogp={mockdata} />
      </LinkCardContainer>
    </>
  );
};

const QIITA_STYLE_CODE = ``;
