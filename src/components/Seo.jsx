import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {/*eslint-disable-next-line react/no-unescaped-entities*/}
        Kata's site
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Kata Farkas, Web Developer"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Analytics />
  </>
);

export default SEO;
