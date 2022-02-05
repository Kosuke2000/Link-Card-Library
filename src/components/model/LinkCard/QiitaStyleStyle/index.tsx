/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { QiitaStyleLinkCardView } from "./View";

const QIITA_STYLE_CODE = ``;

export const QittaStyle: VFC = () => (
  <LinkCardContainerC
    name="Qiita Style"
    View={QiitaStyleLinkCardView}
    code={QIITA_STYLE_CODE}
  />
);
