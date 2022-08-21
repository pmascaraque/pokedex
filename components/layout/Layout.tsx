import React from "react";
import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props: { children: JSX.Element }) {
  return (
    <div>
      <Header />
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}