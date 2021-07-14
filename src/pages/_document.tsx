import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  // <meta property="og:title" content="conlang.dev" />
  //         <meta property="og:site_name" content="conlang.dev" />
  //         <meta property="og:url" content="https://conlang.dev" />
  //         <meta
  //           property="og:image"
  //           content="https://conlang.dev/conlang-dev-logo.png"
  //         />
  //         <meta
  //           property="og:description"
  //           content="Language documentation tool for linguists and conlangers."
  //         />

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla:wght@300;400;700&family=Maven+Pro:wght@800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument
