import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    // <Html lang="en" data-theme="light">
    <Html lang="en">
      <Head />
      <body className="mx-auto  bg-custombgcolor text-customcontentcolor transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
