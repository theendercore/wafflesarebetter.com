import React from "react";
import Layout from "~/components/layout/Layout";
import { api } from "~/utils/api";

export default function tutorials() {
  const { data } = api.posts.getAll.useQuery();

  return (
    <Layout title="Tutorials">
      <div>
        {data?.map((p) => (
          <div key={p.id}>{p.content}</div>
        ))}
      </div>
    </Layout>
  );
}
