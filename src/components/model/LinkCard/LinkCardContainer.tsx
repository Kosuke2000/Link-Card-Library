import { FC } from "react";

import { LinkCardContainerProps } from "@/types/LinkCard";

export const LinkCardContainer: FC<LinkCardContainerProps> = ({
  children,
  linkCardName,
  code,
}) => {
  return (
    <div className="flex flex-col items-center p-4 w-full">
      <h1 className="p-4 text-3xl font-bold">{linkCardName}</h1>
      {children}
      <p>ここにコードが入ります。{code}</p>
    </div>
  );
};
