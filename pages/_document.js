import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const originalRenderPage = ctx.renderPage;

    // // Run the React rendering logic synchronously
    // ctx.renderPage = () =>
    //   originalRenderPage({
    //     // Useful for wrapping the whole react tree
    //     enhanceApp: (App) => App,
    //     // Useful for wrapping in a per-page basis
    //     enhanceComponent: (Component) => Component,
    //   });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" as="style" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Noto+Sans:ital,wght@0,100;0,200;0,900;1,100;1,200&display=swap"
            rel="preload"
            as="style"
          />
          <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
