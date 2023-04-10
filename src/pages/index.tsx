import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const user = useUser();
  const { data } = api.posts.getAll.useQuery();

  return (
    <>
      <Head>
        <title>WafflesAreBetter Beta</title>
        <meta name="description" content="WafflesAreBetter Corp©" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="rounded-md bg-white p-5 drop-shadow-lg">
          {!user.isSignedIn ? <SignInButton /> : <SignOutButton />}
        </div>
        <div>
          {data?.map((p) => (
            <div key={p.id}>{p.content}</div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
