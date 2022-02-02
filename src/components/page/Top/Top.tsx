import {
  NoteStyleLinkCard,
  NOTE_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/NoteStyle";
import {
  NotionStyleLinkCard,
  NOTION_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/NotionStyle";
import {
  QiitaStyleLinkCard,
  QIITA_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/QiitaStyleStyle";
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
    <main className="flex flex-col justify-center items-center p-4 w-screen">
      <div>Hello world</div>
      <NotionStyleLinkCard linkCard={NOTION_STYLE_LINKCARD_PROPS} />
      <ZennStyleLinkCard linkCard={ZENN_STYLE_LINKCARD_PROPS} />
      <TwitterStyleLinkCard linkCard={TWITTER_STYLE_LINKCARD_PROPS} />
      <NoteStyleLinkCard linkCard={NOTE_STYLE_LINKCARD_PROPS} />
      <QiitaStyleLinkCard linkCard={QIITA_STYLE_LINKCARD_PROPS} />
      {/* <UserTable users={mockUserList} /> */}
    </main>
  );
};
