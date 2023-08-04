import Image from "next/image";
import React from "react";

export default function TechStack() {
  return (
    <div>
      <ul>
        <li>
          <Image
            src="https://skillicons.dev/icons?i=html.js)"
            height={20}
            // weight={20}
            alt="html"
          />
        </li>
      </ul>
    </div>
  );
}
