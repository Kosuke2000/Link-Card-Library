import {
  NotionStyleLinkCard,
  NOTION_STYLE_LINKCARD_PROPS,
} from "@/components/model/LinkCard/NotionStyle";

import type { NextPage } from "next";

export const Top: NextPage = () => {
  return (
    <main className="flex flex-col justify-center items-center p-4 h-screen">
      <div>Hello world</div>
      <NotionStyleLinkCard linkCard={NOTION_STYLE_LINKCARD_PROPS} />
      {/* <UserTable users={mockUserList} /> */}
    </main>
  );
};
