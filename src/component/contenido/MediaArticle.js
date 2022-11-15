import React from "react";
import img from "../../images/Justicia.png";
import "./article.css";

const MediaArticle = () => {
  return (
    <div className="nota w-400 p-3 mt-6 mb-6">
      <div className="ratio ratio-21x9">
        <img src={img} alt="notta" ></img>
      </div>
      <div className="body">
        <div className="titulo">
          <h3><a className="nav-link mt-2" href="#">Antígona: Parte 1</a></h3>
        </div>
        <div className="subtitulo">
          <h4>Lorem ipsum dolor sit amet</h4>
        </div>
        <div className="description">
          
        </div>
        <div className="labels">Lorem | 26/10/2022</div>
      </div>
    </div>
  );
};

export default MediaArticle;
