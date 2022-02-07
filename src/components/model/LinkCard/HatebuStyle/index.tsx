import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { HatebuStyleLinkCardView } from "./View";

const HATEBU_STYLE_CODE = ``;

export const HatebuStyle: VFC = () => (
  <LinkCardContainerC
    name="Hatebu Style"
    View={HatebuStyleLinkCardView}
    code={HATEBU_STYLE_CODE}
  />
);
