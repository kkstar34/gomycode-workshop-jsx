import React from 'react';


const SuggestionVideos = () => {
    const urlList = [
        {
          src: "https://www.youtube.com/embed/LwU798HJIrY",
          title: "Quand utilisé React ?",
          description: "Quand a t'on besoin d'utiliser React",
          chaine : "Lior chamla",
          key : 1
        },
        {
         
          src: "https://www.youtube.com/embed/PCgM44dSTsk",
          title: "Angular vs React.js vs Vue : Lequel dois-je apprendre en premier ?",
          description: "Par quoi commencer, la question qui tourmente",
          chaine : "Thibaut Dauce",
          key : 2
        },
        {
          
          src: "https://www.youtube.com/embed/mzX6DX1S7Fc",
          title: "C'est quoi Node.js et pourquoi l'apprendre ?",
          description: "Pourquoi Nodejs ?",
          chaine : "Pierre giraud",
          key : 3
        },
        {
          src: "https://www.youtube.com/embed/ZDJGXpU6Gns",
          title: "Massage positionnel dans le gambit Dame | Alekhine - Yates | Champions du monde d'échecs 🏆",
          description: "Massage positionnel dans le gambit Dame",
          chaine : "Ghost coder",
          key : 4
        },
    
        {
          
          src: "https://www.youtube.com/embed/163myMdvBfI",
          title: "Comment apprendre rapidement ?",
          description: "Quand a t'on besoin d'utiliser React",
          chaine : "Le design du web",
          key : 5
        },
        {
          src: "https://www.youtube.com/embed/LwU798HJIrY",
          title: "Quand utilisé React ?",
          description: "Quand a t'on besoin d'utiliser React",
          chaine : "Grafikart",
          key : 6
        },
      ];

    return(
        <div className="col-md-5" >
        <div className="mb-3">
          <button className="btn btn-dark btn-perso">All</button>
          <button className="btn  btn-secondary ms-3  btn-perso">Lessons</button>
          <button className="btn  btn-secondary ms-3  btn-perso">Related</button>
          <button className="btn  btn-secondary ms-3  btn-perso">Plus</button>
        </div>
        {urlList.map((el) => (
          <div className="d-flex mt-2 justify-content-start " key={el.key}>
            <div  className="iframe-container">
              <iframe
                src={el.src}
                title={el.title}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="ms-2 pt-3 desc">
              <h6>{el.title}</h6>
              <p>{el.description}</p>
              <p className="text-muted mt-5">{el.chaine }</p>
              <p className="text-muted small">15k views . 1 year ago</p>
            </div>
          </div>
        ))}
      </div>
    )
}


export default SuggestionVideos;