import React from "react";
import Back from "../common/header/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/Recent.css";
import img from "../home/images/about.jpg";

const Blog = () => {
  return (
    <>
      <section className="blog-out mb">
        <Back name="Blog" title="Blog Grid - Our Blogs" cover={img} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default Blog;

