import TextField from "../TextField";
import "./styles.css";
import SelectField from "../SelectField";
import Button from "../Button";
import { useState } from "react";

const FormField = ({ handleCreateCollaborator, teamsNames }) => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const sendForm = (event) => {
    event.preventDefault();
    handleCreateCollaborator({
      name,
      position,
      image,
      team,
    });
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form-wrapper">
      <form onSubmit={sendForm}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite seu Nome"
          value={name}
          handleChangeText={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite seu Cargo"
          value={position}
          handleChangeText={(value) => setPosition(value)}
        />
        <TextField
          required={true}
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          handleChangeText={(value) => setImage(value)}
        />
        <SelectField
          required={true}
          label="Time"
          value={team}
          itens={teamsNames}
          handleChangeText={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default FormField;
