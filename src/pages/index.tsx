import { type NextPage } from "next";

import Layout from "../components/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="WafflesAreBetter Beta">
      <main className="flex min-h-[84vh] flex-col items-center justify-center">
        WafflesAreBetter test
      </main>
    </Layout>
  );
};

export default Home;
