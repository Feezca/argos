import React from "react";
import "./article.css";

const EmbedMediaArticle = () => {
  return (
    <div className="nota w-400 p-3 mt-6 mb-6">
      <div className="media">
        <iframe
          width="560"
          height="360"
          src="https://www.youtube.com/embed/pM81gEFoEmc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="body">
        <div className="titulo">
          <h3>Lorem ipsum dolor sit amet</h3>
        </div>
        <div className="subtitulo">
          <h4>Lorem ipsum dolor sit amet</h4>
        </div>
        <div className="description">
          <p>
          Sábado 18:15. Horario para abandonarse en una siesta, repasando lo que podrías estar haciendo y lo que no queres hacer (? Para pasarlo, te dejamos un fragmento del tremendo encuentro que tuvimos con Eduardo Segura en nuestro primer episodio de "Historias de al lado"

¿Qué te parece?

No dejes de ver toda la entrevista 👀 Te esperamos
          </p>
        </div>
        <div className="labels">YouTube | 15/10/2022</div>
      </div>
    </div>
  );
};

export default EmbedMediaArticle;
