import React, { useEffect } from "react";

// Import CSS
import "./profilCatalog.scss";
import CardUser from "../../CardUser";

function ProfilCatalog({ fetchUserList, userList, newConversationCreation }) {
  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);
  console.log(userList.users);

  return (
    <section className="profilCatalog">
      <div className="profilCatalog-title">
        <h2>Les derniers profils</h2>
      </div>

      <div className="profilCatalog_list">
        {userList.users &&
          userList.users.map((list, index) => (
            <React.Fragment key={index}>
              <CardUser
                urlPicture="https://xsgames.co/randomusers/avatar.php?g=female"
                altPicture="Photo de profil"
                name={list.firstname}
                city={list.city}
                age="25"
                newConversation={(id) => newConversationCreation(id)}
                id={list.id}
              />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
}

export default ProfilCatalog;
