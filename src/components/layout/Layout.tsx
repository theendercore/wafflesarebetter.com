import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { type } from "os";
import { ScriptProps } from "next/script";
import Head from "next/head";

type LayoutProps = {
  title: String;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="WafflesAreBetter Corp©" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-gray-200 flex-grow">
        <main className="container m-auto">{children}</main>
      </div>
      <Footer className="flex-end"/>
    </div>
  );
}
