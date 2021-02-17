import React, { useState } from "react";

function Widgets() {
  const [posts, setPosts] = useState([]);
  return (
    <div className='widgets'>
      <div
        class='fb-page'
        data-href='https://www.facebook.com/react'
        data-tabs='timeline'
        data-width='340px'
        data-height='1500px'
        data-small-header='false'
        data-adapt-container-width='true'
        data-hide-cover='false'
        data-show-facepile='true'
      >
        <blockquote
          cite='https://www.facebook.com/react'
          class='fb-xfbml-parse-ignore'
        >
          <a href='https://www.facebook.com/react'>React</a>
        </blockquote>
      </div>
    </div>
  );
}

export default Widgets;
