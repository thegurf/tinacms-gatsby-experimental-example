import path from "path";
import express from "express";

import client from "./.tina/__generated__/client";
import type { CreatePageArgs, CreateDevServerArgs } from "gatsby";

exports.createPages = async ({ actions }: CreatePageArgs) => {
  console.log("createPages", actions);
  const { createPage } = actions;
  // `getPokemonData` is a function that fetches our data
  const pages = await client.queries.postConnection();
  console.log("pages", pages);

  // Create a page that lists all posts.
  createPage({
    path: `/`,
    component: path.resolve("./src/templates/home.tsx"),
    context: { pages: pages?.data.postConnection },
  });

  // Create a page for each Post.
  const promises =
    pages?.data?.postConnection?.edges?.map(async (post) => {
      const data = await client.queries.post({
        relativePath: post?.node?._sys.relativePath || "",
      });
      createPage({
        path: `/post/${post?.node?._sys.filename}/`,
        component: path.resolve("./src/templates/post.tsx"),
        context: { data },
      });
    }) || [];
  await Promise.all(promises);
};

// Need access to the static folder in development
exports.onCreateDevServer = ({ app }: CreateDevServerArgs) => {
  app.use(express.static("static"));
};
