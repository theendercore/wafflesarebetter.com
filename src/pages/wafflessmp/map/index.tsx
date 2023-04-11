import React from "react";
import Layout from "~/components/layout/Layout";

export default function Map() {
  return (
    <Layout title="WafflesSMP Map">
      <iframe src="http://wafflessmp.apexmc.co:8123/" className="h-screen w-full"></iframe>
    </Layout>
  );
}
