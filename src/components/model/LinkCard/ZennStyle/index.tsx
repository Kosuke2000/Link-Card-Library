import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { ZennStyleLinkCardView } from "./View";

const ZENN_STYLE_CODE = ``;

export const ZennStyle: VFC = () => (
  <LinkCardContainerC
    name="Zeen Style"
    View={ZennStyleLinkCardView}
    code={ZENN_STYLE_CODE}
  />
);
