import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { TwitterStyleLinkCardView } from "./View";

const TWITTER_STYLE_CODE = ``;

export const TwitterStyle: VFC = () => (
  <LinkCardContainerC
    name="Twitter Style"
    View={TwitterStyleLinkCardView}
    code={TWITTER_STYLE_CODE}
  />
);
