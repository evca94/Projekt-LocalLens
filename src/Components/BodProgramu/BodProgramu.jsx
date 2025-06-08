export const BodProgramu = ({ program }) => {
  return (
    <div className="card">
      <img className="image" src={`/images/${program.image}`}></img>
      <div className="name">{program.name} </div>
      <div className="description">{program.description}</div>
      <a href={program.website} className="website">Odkaz na webové stránky podniku</a>
      <a href={program.map} className="map">Odkaz na mapu</a>
    </div>
  );
};
