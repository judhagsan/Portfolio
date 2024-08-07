// These styles apply to every route in the application
import "../styles/globals.css";
import React from "react";
import Head from "next/head";

function page({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Judhagsan</title>
        <link rel="shortcut icon" href="/pixel-perfil.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default page;
