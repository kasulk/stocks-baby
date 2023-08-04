import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default function Document() {
  return (
    // <Html lang="en" data-theme="light">
    <Html lang="en">
      <Head />
      {/* <body className="mx-auto  bg-custombgcolor text-customcontentcolor transition-all bg-gradient-to-tr from-custombgcolor from-60% via-slate-500 via-75% to-custombgcolor  "> */}
      <body className="mx-auto bg-custombgcolor text-customcontentcolor transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
