/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { LinkCardContainerC } from "../LinkCardContainer";
import { NoteStyleLinkCardView } from "./View";

const NOTE_STYLE_CODE = ``;

export const NoteStyle: VFC = () => (
  <LinkCardContainerC
    name="Note Style"
    View={NoteStyleLinkCardView}
    code={NOTE_STYLE_CODE}
  />
);
