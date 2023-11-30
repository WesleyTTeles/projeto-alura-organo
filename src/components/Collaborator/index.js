import "./Collaborator.css";

const Collaborator = ({ name, position, image, primaryColor }) => {
  return (
    <div className="card-wrapper">
      <div className="header" style={{ backgroundColor: primaryColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>
    </div>
  );
};

export default Collaborator;
