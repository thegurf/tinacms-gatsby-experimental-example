import React from "react";
import { Link, PageProps } from "gatsby";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { PostQuery } from "../../.tina/__generated__/types";

const PostPage = (
  args: PageProps<
    unknown,
    {
      tinaData: {
        data: PostQuery;
        query: string;
        variables: {
          relativePath: string;
        };
      };
    }
  >
) => {
  const { data } = useTina({
    data: args.pageContext.tinaData.data,
    query: args.pageContext.tinaData.query,
    variables: args.pageContext.tinaData.variables,
  });
  return (
    <div>
      <div>
        <Link to="/">&larr; Home</Link>
      </div>
      <h1>{data.post.title}</h1>
      <TinaMarkdown content={data.post.body} />
    </div>
  );
};
export default PostPage;
