import React from "react";
import Layout from "~/components/layout/Layout";

export default function Map() {
  return (
    <Layout title="WafflesSMP Map">
      <iframe
        src="http://wafflessmp.apexmc.co:8123/"
        className="min-h-[85vh] w-full"
      ></iframe>
    </Layout>
  );
}
