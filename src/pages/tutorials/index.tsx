import React from "react";
import Layout from "~/components/layout/Layout";
import { api } from "~/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import SButton from "~/components/SButton";

export default function tutorials() {
  const { data } = api.posts.getAll.useQuery();

  const user = useUser();

  return (
    <Layout title="Tutorials">
      <div>
        {data?.map((p) => (
          <div key={p.id}>
            {p.title}
            {p.content}
          </div>
        ))}
      </div>
      <div className="w-fit">
      {!user.isSignedIn ? (
        <SButton>
          <SignInButton />
        </SButton>
      ) : (
        <div>
          {user.user?.fullName}
          <SButton>
            <SignOutButton />
          </SButton>
        </div>
      )}
      </div>
    </Layout>
  );
}
