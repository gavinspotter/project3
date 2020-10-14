import React from "react";
import BlogItem from "./BlogItem";
import "./BlogList.css";
import Button from "../../shared/components/FormElements/Button";

const BlogList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>no blog posts found</h2>
        <Button to="/blog/new">new blog</Button>
      </div>
    );
  }

  return (
    <ul className="journal-list">
      {props.items.map((blg) => (
        <BlogItem
          key={blg.id}
          id={blg.id}
          imge={blg.blgimg}
          blog={blg.blgentry}
        />
      ))}
    </ul>
  );
};

export default BlogList;
