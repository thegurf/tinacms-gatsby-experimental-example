import React from "react";
import { Link, PageProps } from "gatsby";
import { PostConnectionQuery } from "../../.tina/__generated__/types";

const HomePage = (
  args: PageProps<
    unknown,
    {
      pages: {
        data: PostConnectionQuery;
      };
    }
  >
) => {
  const data = args.pageContext.pages.data;
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Posts</h2>
      <ul>
        {data?.postConnection?.edges?.map((edge) => {
          return (
            <li key={edge?.node?.id}>
              <Link to={`/post/${edge?.node?._sys.filename}`}>
                {edge?.node?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default HomePage;
