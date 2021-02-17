import React, { useState } from "react";

function Widgets() {
  const [posts, setPosts] = useState([]);
  return (
    <div className='widgets'>
      <iframe
        width='340'
        height='100%'
        style={{ border: "none", overflow: "hidden" }}
        src='http://instagram.com/p/CHdsykXANRN/embed'
        scrolling='no'
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  );
}

export default Widgets;
