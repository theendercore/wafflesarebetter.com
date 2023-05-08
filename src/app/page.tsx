import { type NextPage } from "next";
import SButton from "../components/SButton";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-[84vh] flex-col justify-center">
      <h1 className="text-8xl font-bold">WafflesAreBetter</h1>
      <span className="pl-8 text-xl font-medium">
        Data packs, resource packs, and other Minecraft stuff.
      </span>
      <SButton>
        <button>
          Test
        </button>
      </SButton>
    </div>
  );
};

export default Home;
