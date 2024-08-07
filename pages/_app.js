import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

function page({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Judhagsan</title>
        <link rel="shortcut icon" href="/pixel-perfil.png" />
      </Head>
      <body>
        {children}
        <SpeedInsights />
      </body>
      <Component {...pageProps} />
    </>
  );
}

export default page;
