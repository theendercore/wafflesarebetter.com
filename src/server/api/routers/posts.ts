import { z } from "zod";

import { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import {} from "~/server/api/trpc";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

const filterUserForClient = ({ id, username, profileImageUrl }: User) => {
  return { id, username, profileImageUrl };
};

export const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({ take: 100 });
    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUserForClient);

    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId);
      if (!author || !author.username)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Author for post not found!",
        });
      return {
        post,
        author: { ...author, username: author.username },
      };
    });
  }),
  // create: protectedProcedure
  //   .input(
  //     z.object({
  //       title: z.string().min(1).max(254),
  //       content: z.string().min(10).max(20000),
  //     })
  //   )
  //   .mutation(async ({ ctx, input }) => {
  //     const authorId = ctx.auth.userId;

  //     const post = await ctx.prisma.post.create({
  //       data: {
  //         authorId,
  //         title: input.title,
  //         content: input.content,
  //       },
  //     });

  //     return post;
  //   }),
});
