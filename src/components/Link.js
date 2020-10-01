import React from "react";

const Link = ({ url, title }) => {
  return (
    <a href={url} className="container">
      {title}
      hello
    </a>
  );
};

export default Link;
