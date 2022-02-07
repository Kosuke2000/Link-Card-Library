import { HatebuStyle } from "@/components/model/LinkCard/HatebuStyle";
import { NoteStyle } from "@/components/model/LinkCard/NoteStyle";
import { NotionStyle } from "@/components/model/LinkCard/NotionStyle";
import { QittaStyle } from "@/components/model/LinkCard/QiitaStyleStyle";
import { TwitterStyle } from "@/components/model/LinkCard/TwitterStyle";
import { ZennStyle } from "@/components/model/LinkCard/ZennStyle";

import { Desc, useDesc } from "@/components/descModal";

import type { NextPage } from "next";

export const Top: NextPage = () => {
  const [appearDesc, appear, hidden] = useDesc();

  return (
    <main className="flex flex-col justify-center items-center p-4 w-screen bg-slate-500 ">
      <h1 onClick={appear} className="p-8 text-6xl font-semibold text-white">
        Link Card Library
      </h1>
      {appearDesc && <Desc hidden={hidden} />}
      <NotionStyle />
      <QittaStyle />
      <ZennStyle />
      <NoteStyle />
      <HatebuStyle />
      <TwitterStyle />
      {/* <UserTable users={mockUserList} /> */}
    </main>
  );
};
