import {
  NotionStyleLinkCard,
  NOTION_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/NotionStyle";
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
    <main className="flex flex-col justify-center items-center p-4 ">
      <div>Hello world</div>
      <NotionStyleLinkCard linkCard={NOTION_STYLE_LINKCARD_PROPS} />
      <ZennStyleLinkCard linkCard={ZENN_STYLE_LINKCARD_PROPS} />
      <TwitterStyleLinkCard linkCard={TWITTER_STYLE_LINKCARD_PROPS} />
      {/* <UserTable users={mockUserList} /> */}
    </main>
  );
};
