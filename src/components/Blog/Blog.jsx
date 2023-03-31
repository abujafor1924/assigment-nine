import React, { useEffect, useState } from "react";
import Content from "../Content/Content";

const Blog = (props) => {
  const handalBlog = props.handleBlog;
  const handaloftime = props.handaloftime;
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div>
      {blog.map((product) => (
        <Content
          product={product}
          handalBlog={handalBlog}
          handaloftime={handaloftime}
        ></Content>
      ))}
    </div>
  );
};

export default Blog;
