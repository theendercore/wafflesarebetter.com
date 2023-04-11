import React from "react";
import Layout from "~/components/layout/Layout";
import Link from "next/link";
import SButton from "../../components/SButton";

export default function SMP() {
  return (
    <Layout title="WafflesSMP">
      <div>SMP stuff</div>
      <SButton>
        <Link as="/wafflessmp/map" href="/">
          Map
        </Link>
      </SButton>
    </Layout>
  );
}
