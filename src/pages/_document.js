import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="pt">
        <Head />
        <body>
          {/** Avoid FOUC with this hack on firefox */}
          <script>0</script>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
