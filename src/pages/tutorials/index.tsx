import Layout from "~/components/layout/Layout";
import { RouterOutputs, api } from "~/utils/api";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import SButton from "~/components/SButton";
import Image from "next/image";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { LoadingPage, LoadingSpinner } from "~/components/LoadingSpinner";
import { useState } from "react";

dayjs.extend(relativeTime);

const CratePostWizard = () => {
  const { user } = useUser();

  const [input, setInput] = useState<{ title: string; content: string }>({
    title: "",
    content: "",
  });

  // const { mutate } = api.posts.create.useMutation();

  if (!user) return null;

  return (
    <div className="flex gap-3 p-2">
      <Image
        src={user.profileImageUrl}
        alt="Profile Image"
        width={56}
        height={56}
        className="h-12 w-12 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title..."
          className="bg-transparent outline-none"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
        <input
          type="text"
          name="content"
          id="content"
          placeholder="Content..."
          className="bg-transparent outline-none"
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
        />
        <button
          type="submit"
          // onSubmit={() => mutate(input)}
          className="rounded-full bg-slate-300 text-gray-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

type PostWithUser = RouterOutputs["posts"]["getAll"][number];
function PostCard(props: PostWithUser) {
  const { post, author } = props;

  return (
    <div className="flex gap-2 rounded-lg bg-slate-300 p-3 drop-shadow-xl">
      <div className="flex flex-col items-center">
        <Image
          src={author.profileImageUrl}
          alt="Profile Image"
          width={56}
          height={56}
          placeholder="empty"
          className="h-12 w-12 rounded-full"
        />
        <span>{author.username}</span>
      </div>

      <div className="flex flex-col p-3 pt-0">
        <h3 className="text-2xl font-bold">{post.title}</h3>
        <p>{post.content}</p>
        <span>{`${dayjs(post.createdAt).fromNow()}`}</span>
      </div>
    </div>
  );
}

const Feed = () => {
  const { data, isLoading: postsLoading } = api.posts.getAll.useQuery();

  if (postsLoading) return <LoadingPage />;

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-wrap gap-10 p-10">
      {data?.map((p) => (
        <PostCard key={p.post.id} {...p} />
      ))}
    </div>
  );
};

export default function Tutorials() {
  const { isLoaded: userLoaded, isSignedIn } = useUser();
  api.posts.getAll.useQuery();

  if (!userLoaded) return <div />;

  return (
    <Layout title="Tutorials">
      <div className="flex flex-col items-center justify-center gap-3 p-10">
        {!isSignedIn ? (
          <SButton>
            <SignInButton />
          </SButton>
        ) : (
          <>
            <SButton>
              <SignOutButton />
            </SButton>
            <CratePostWizard />
          </>
        )}
      </div>
      <Feed />
    </Layout>
  );
}
