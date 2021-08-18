import React from "react";


const MainVideo = () => {
  const comments = [
    {
      src:
        "https://yt3.ggpht.com/ytc/AKedOLS1vzrbt4lOu15PYSijeNwKvedcRcBSIrl9ig=s88-c-k-c0x00ffffff-no-rj",
      name: "Zaid",
      comment: "Tu es un tueur",
      time: "10 months ago",
      key : 1
    },

    {
      src:
        "https://yt3.ggpht.com/ytc/AKedOLT969g47R1hj0f6LRdfBifDG9L-1eNV2uHabwmDIuI=s88-c-k-c0x00ffffff-no-rj",
      name: "Luc boulin",
      comment: "Excellent tuto, vous êtes le meilleur ! 😆",
      time: "10 months ago",
      key : 2,
    },


    {
      src:
        "https://yt3.ggpht.com/ytc/AKedOLSftRLkp_8zG7cCrcH51T4FOJnD8k6vMWNBNdExJg=s88-c-k-c0x00ffffff-no-rj",
      name: "Swift Officiel",
      comment:
        "Perso je trouve que toutes vidéos sont vraiment top ! Avec ça mtn, je sais à quel moment il faut et il ne faut pas utilisé React ! Je suis actu sur les Refs en React et si tout se passe bien je vais commencer les petits projets pour me faire la main tout en ne pas me coder un portfolio avec React 😁 ou une landing page car ça HTML CSS et JS ça suffit amplement ",
      time: "10 minutes ago",
      key : 3
    },

    {
      src:
        "https://yt3.ggpht.com/8DhdW2d1x-NATzMMaKgLuF4bEDNKSe28cCMImjyDM5LB6xmtN5ptlXC6nhAbGz9x4wQFwlBZ6A=s88-c-k-c0x00ffffff-no-rj",
      name: "Damien steph",
      comment:
        "Merci pour la vidéo, pour les présentations je te propose  d'essayer avec reveal JS",
      time: "10 months ago",
      key : 4
    },
    {
        src:
          "https://yt3.ggpht.com/8DhdW2d1x-NATzMMaKgLuF4bEDNKSe28cCMImjyDM5LB6xmtN5ptlXC6nhAbGz9x4wQFwlBZ6A=s88-c-k-c0x00ffffff-no-rj",
        name: "Damien steph",
        comment:
          "Merci pour la vidéo, pour les présentations je te propose  d'essayer avec reveal JS",
        time: "10 months ago",
        key : 5
      },
      {
        src:
          "https://yt3.ggpht.com/8DhdW2d1x-NATzMMaKgLuF4bEDNKSe28cCMImjyDM5LB6xmtN5ptlXC6nhAbGz9x4wQFwlBZ6A=s88-c-k-c0x00ffffff-no-rj",
        name: "Damien steph",
        comment:
          "Merci pour la vidéo, pour les présentations je te propose  d'essayer avec reveal JS",
        time: "10 months ago",
        key : 5
      },
      {
        src:
          "https://yt3.ggpht.com/8DhdW2d1x-NATzMMaKgLuF4bEDNKSe28cCMImjyDM5LB6xmtN5ptlXC6nhAbGz9x4wQFwlBZ6A=s88-c-k-c0x00ffffff-no-rj",
        name: "Damien steph",
        comment:
          "Merci pour la vidéo, pour les présentations je te propose  d'essayer avec reveal JS",
        time: "10 months ago",
        key : 5
      },
  ];

  return (
    <div className="col-md-7 ">
      <iframe
        width="100%"
        height="538"
        src="https://www.youtube.com/embed/no82oluCZag"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div>
        <h2>Quand a t'on besoin d'utiliser React JS ?</h2>

        <p>
          Abonne-toi à la NewsLetter pour recevoir des tas d'infos sur le
          développement web :
        </p>
        <a href="https//gomycode.co:">
          <h5>Show more</h5>
        </a>
      </div>

      {/* comment */}
      <br />
      <br />
      <hr />
      <div className="comments">
        {comments.map((elt) => (
          <div className="d-flex mb-3 " key={elt.key}>
            <img className="img-circle" src={elt.src} alt="" />

            <div className="ms-2">
              <h6>
                {elt.name} <small>{elt.time}</small>{" "}
              </h6>

              <p>{elt.comment}</p>

              <span>
                <i className="fas fa-thumbs-up icon"></i>
                <i className="fas fa-thumbs-down ms-3 icon"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainVideo;
