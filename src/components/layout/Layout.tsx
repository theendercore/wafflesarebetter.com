import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title}</title>
        <meta name="description" content="WafflesAreBetter Corp©" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="min-h-[84vh] flex-grow  bg-gray-200">
        <main className="container m-auto min-h-[84vh]">{children}</main>
      </div>
      <Footer className="flex-end" />
    </div>
  );
}
