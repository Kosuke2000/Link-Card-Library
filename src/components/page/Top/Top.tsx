import { AiFillTwitterCircle } from "react-icons/ai";
import { BsQuestionCircleFill } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";

import { useDesc } from "@/hooks/useDesc";

import { Desc } from "@/components/model/LinkCard/Desc";
import { HatebuStyle } from "@/components/model/LinkCard/HatebuStyle";
import { NoteStyle } from "@/components/model/LinkCard/NoteStyle";
import { NotionStyle } from "@/components/model/LinkCard/NotionStyle";
import { QittaStyle } from "@/components/model/LinkCard/QiitaStyleStyle";
import { TwitterStyle } from "@/components/model/LinkCard/TwitterStyle";
import { ZennStyle } from "@/components/model/LinkCard/ZennStyle";

import { Spacer } from "@/components/ui/Spacer";

import type { NextPage } from "next";

export const Top: NextPage = () => {
  const [appearDesc, appear, onHidden] = useDesc();

  return (
    <main className="flex flex-col justify-center items-center p-4 w-screen bg-slate-500">
      <h1 className="p-8 text-4xl font-semibold text-center text-white md:text-6xl">
        Link Card Library
      </h1>
      <BsQuestionCircleFill
        onClick={appear}
        className=" text-2xl text-white hover:text-white/40"
      />
      {appearDesc && <Desc hidden={onHidden} />}
      <NotionStyle />
      <QittaStyle />
      <ZennStyle />
      <NoteStyle />
      <HatebuStyle />
      <TwitterStyle />
      <Spacer size={60} />
      <div className="flex items-center">
        <a
          target="_blank"
          href="https://github.com/Kosuke2000/Link-Card-Gallery"
          rel="noreferrer"
        >
          <GoMarkGithub className="text-6xl text-white hover:text-white/40" />
        </a>
        <Spacer size={8} />
        <a
          target="_blank"
          href="https://twitter.com/youuchiharu"
          rel="noreferrer"
        >
          <AiFillTwitterCircle className="text-7xl text-white hover:text-white/40" />
        </a>
      </div>
      <Spacer size={32} />
    </main>
  );
};
