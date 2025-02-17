import React from "react";
import "./article.css";
import { InstagramEmbed } from "react-social-media-embed";

// conexion a las publicaciones de instagram 
const textArticle = () => {
  return (
    <div id='media' style={{ display: "flex", justifyContent: "center" }}>
      <InstagramEmbed
        url="https://www.instagram.com/p/Ci8qkxYLUsr/"
        width={328}
        captioned
      />
    </div>
  );
};

export default textArticle;
