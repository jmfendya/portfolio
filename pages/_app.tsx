import "styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Portfolio site with work examples, experience, education, and contact information for Jesse Fendya."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
