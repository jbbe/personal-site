import React, { ReactElement } from "react";

const Link = "https://github.com/jbbe/personal-site";

export default function SourceLink(): ReactElement {
  return   <a href={Link}>
      <div className="source-link">{"</>"}</div>
    </a>;
}
