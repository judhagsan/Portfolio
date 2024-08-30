import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

function page({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Judhagsan</title>
        <link rel="shortcut icon" href="/pixel-perfil.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default page;
