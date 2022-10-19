import React from "react";

// Import CSS
import "./profilCatalog.scss";
import CardUser from "../../CardUser";

function ProfilCatalog() {
  return (
    <section className="profilCatalog">
      <div className="profilCatalog-title">
        <h2>Les derniers profils</h2>
      </div>

      <div className="profilCatalog_list">
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Elodie"
          city="Paris"
          age="25"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Marina"
          city="Marseille"
          age="25"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Meline"
          city="Marseille"
          age="25"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Oriane"
          city="Nice"
          age="25"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Elodie"
          city="Paris"
          age="25"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Marina"
          city="Marseille"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Meline"
          city="Marseille"
          age="25"
        />
        <CardUser
          urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
          altPicture="Photo de profil"
          name="Oriane"
          city="Nice"
          age="25"
        />
      </div>
    </section>
  );
}

export default ProfilCatalog;
