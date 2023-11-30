import Collaborator from "../Collaborator";
import "./Team.css";
import React from "react";

const Team = ({ nome, primaryColor, secundaryColor, collaborators }) => {
  const backGroundSecundaryColor = { backgroundColor: secundaryColor };
  const backGroundPrimaryColor = { backgroundColor: primaryColor };

  return (
    collaborators.length > 0 && (
      <section className="team" style={backGroundSecundaryColor}>
        <h3>
          {nome}
          <div className="line" style={backGroundPrimaryColor}></div>
        </h3>
        <div className="colaborator">
          {collaborators.map((collaborator) => (
            <Collaborator
              key={collaborator.name}
              name={collaborator.name}
              position={collaborator.position}
              image={collaborator.image}
              primaryColor={primaryColor}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
