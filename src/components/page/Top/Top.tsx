import {
  HatebuStyleLinkCard,
  HATEBU_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/HatebuStyle";
import {
  NoteStyleLinkCard,
  NOTE_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/NoteStyle";
import {
  NotionStyleLinkCard,
  NOTION_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/NotionStyle";
import { QiitaStyleLinkCard } from "@/components/model/LinkCard/QiitaStyleStyle";
import {
  TwitterStyleLinkCard,
  TWITTER_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/TwitterStyle";
import {
  ZennStyleLinkCard,
  ZENN_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/ZennStyle";

import type { NextPage } from "next";

export const Top: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 w-screen bg-slate-400 ">
      <h1 className="p-8 text-6xl font-semibold">Link Card Library</h1>
      <NotionStyleLinkCard linkCard={NOTION_STYLE_LINKCARD_PROPS} />
      <QiitaStyleLinkCard />
      <ZennStyleLinkCard linkCard={ZENN_STYLE_LINKCARD_PROPS} />
      <NoteStyleLinkCard linkCard={NOTE_STYLE_LINKCARD_PROPS} />
      <HatebuStyleLinkCard linkCard={HATEBU_STYLE_LINKCARD_PROPS} />
      <TwitterStyleLinkCard linkCard={TWITTER_STYLE_LINKCARD_PROPS} />
      {/* <UserTable users={mockUserList} /> */}
    </main>
  );
};
