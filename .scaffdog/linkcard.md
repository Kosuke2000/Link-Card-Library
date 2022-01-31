---
name: "linkcard"
root: "."
output: "**/*"
ignore: []
questions:
  name: "What style?"
---

---

# `src/components/model/LinkCard/{{ inputs.name | pascal }}Style/index.tsx`

```tsx
/* eslint-disable @next/next/no-img-element */

import { VFC } from "react";

import { mockOgpData } from "@/mocks/LinkCard";
import { LinkCard, LinkCardProps } from "@/types/LinkCard";

import { LinkCardView } from "./View";

export const {{ inputs.name | upper }}_STYLE_LINKCARD_PROPS: LinkCard = {
  linkCardName: "{{ inputs.name | pascal }} style",
  data: mockOgpData,
  code: "code",
};

export const {{ inputs.name | pascal }}StyleLinkCard: VFC<LinkCardProps> = ({ linkCard }) => {
  const { linkCardName, data, code } = linkCard;
  return (
    <div>
      <h1>{linkCardName}</h1>
      <LinkCardView ogp={data} />
      <p>ここにコードが入ります。{code}</p>
    </div>
  );
};
```

# `src/components/model/LinkCard/{{ inputs.name | pascal }}Style/View.tsx`

```tsx
/* eslint-disable @next/next/no-img-element */
import { VFC } from "react";

import { LinkCardViewProps } from "@/types/LinkCard";

export const LinkCardView: VFC<LinkCardViewProps> = ({ ogp }) => {
  const { title, description, faviconUrl, pageUrl, ogImgUrl } = ogp;

  return (
    <article className="flex justify-between w-full h-36 rounded-xl border border-blue-100 border-solid">
      <div
        className={`flex flex-col justify-between  py-6  pl-8 pr-20  hover:bg-gray-100 hover:rounded-l-xl w-5/6`}
      >
        <h3 className="text-xl truncate">{title}</h3>
        <p className="overflow-hidden text-sm text-gray-400">{description}</p>
        <div className="flex items-center">
          {faviconUrl && <img src={faviconUrl} className="h-4" alt="" />}
          <p className={`text-sm truncate ml-2`}>{pageUrl}</p>
        </div>
      </div>
      {ogImgUrl && (
        <div className="w-1/6 h-full rounded">
          <img
            src={ogImgUrl}
            className="object-cover w-full h-full rounded-r-xl"
            alt=""
          />
        </div>
      )}
    </article>
  );
};
```

# `src/components/model/LinkCard/{{ inputs.name | pascal }}Style/{{ inputs.name | pascal }}Style.stories.tsx`

```tsx
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { mockOgpData } from "@/mocks/LinkCard";

import { LinkCardView } from "./View";

export default {
  title: "Model/LinkCard/{{ inputs.name | pascal }}Style",
  component: LinkCardView,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkCardView>;

const Template: ComponentStory<typeof LinkCardView> = (args) => (
  <LinkCardView {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ogp: mockOgpData,
};
```
