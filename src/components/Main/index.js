import { useState } from "react";
import Banner from "../Banner";
import FormField from "../FormField";
import Team from "../Team";
import { listTeams } from "../ListTeams.js";
import "./Main.css";
import Footer from "../Footer/index.js";

const Main = () => {
  const [collaborators, serCollaborators] = useState([]);

  const handleCollaboratorAdd = (collaborator) => {
    serCollaborators([...collaborators, collaborator]);
  };
  return (
    <>
      <Banner />
      <FormField
        teamsNames={listTeams.map((team) => team.name)}
        handleCreateCollaborator={(collaborator) =>
          handleCollaboratorAdd(collaborator)
        }
      />
      {collaborators.length > 0 ? (
        listTeams.map((listTeam) => (
          <Team
            key={listTeam.name}
            nome={listTeam.name}
            primaryColor={listTeam.primaryColor}
            secundaryColor={listTeam.secundaryColor}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === listTeam.name
            )}
          />
        ))
      ) : (
        <section className="warnning">
          <h1>Sem colaborador cadastradados!</h1>
          <h2>Realize o cadastro dos colaboradores para visualizar.</h2>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Main;
