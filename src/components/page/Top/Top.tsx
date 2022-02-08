import { BsQuestionCircleFill } from "react-icons/bs";

import { useDesc } from "@/hooks/useDesc";

import { Desc } from "@/components/model/LinkCard/Desc";
import { HatebuStyle } from "@/components/model/LinkCard/HatebuStyle";
import { NoteStyle } from "@/components/model/LinkCard/NoteStyle";
import { NotionStyle } from "@/components/model/LinkCard/NotionStyle";
import { QittaStyle } from "@/components/model/LinkCard/QiitaStyleStyle";
import { TwitterStyle } from "@/components/model/LinkCard/TwitterStyle";
import { ZennStyle } from "@/components/model/LinkCard/ZennStyle";

import type { NextPage } from "next";

export const Top: NextPage = () => {
  const [appearDesc, appear, onHidden] = useDesc();

  return (
    <main className="flex flex-col justify-center items-center p-4 w-screen bg-slate-500 ">
      <h1 className="p-8 text-6xl font-semibold text-white">
        Link Card Library
      </h1>
      <BsQuestionCircleFill onClick={appear} className=" text-2xl text-white" />
      {appearDesc && <Desc hidden={onHidden} />}
      <NotionStyle />
      <QittaStyle />
      <ZennStyle />
      <NoteStyle />
      <HatebuStyle />
      <TwitterStyle />
    </main>
  );
};
