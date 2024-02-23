"use client";

import { allPosts } from "@/.contentlayer/generated";
import { compareDesc } from "date-fns";
import { NextPage } from "next";

const Home: NextPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="bg-red-100">
      <ul>
        {posts.map((v, i) => (
          <li key={i}>{v.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
