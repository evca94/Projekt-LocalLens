import './MestoTitle.css';
export const MestoTitle = ({ name }) => {

  return (
  <div className="city-name-container">
  <h1 className="city-name">{name}</h1>
  </div>
  )
};
