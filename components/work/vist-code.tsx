import React from "react";
import { RxGithubLogo } from "react-icons/rx";

import { LinkPreview } from "../ui/link-preview";

export default function VistCode() {
  return (
    <span>
      Vist code on{" "}
      <LinkPreview
        className="flex items-center gap-2 bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text font-bold text-transparent"
        url="https://github.com/mkh2002/protfoli"
      >
        Github <RxGithubLogo size-4 />
      </LinkPreview>
    </span>
  );
}
