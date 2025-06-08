export const BodProgramu = ({ program }) => {
  return (
    <div className="card">
      <img className="image" src={`/images/${program.image}`}></img>
      <div className="name">{program.name} </div>
      <div className="description">{program.description}</div>
      <div className="website">{program.website}</div>
      <a href className="map">
        {program.map}
      </a>
    </div>
  );
};
