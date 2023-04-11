import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/Layout";
import SButton from "../components/SButton";

const Home: NextPage = () => {
  const user = useUser();

  return (
    <Layout title="WafflesAreBetter Beta">
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <SButton>
          {!user.isSignedIn ? <SignInButton /> : <SignOutButton />}
        </SButton>
      </main>
    </Layout>
  );
};

export default Home;
