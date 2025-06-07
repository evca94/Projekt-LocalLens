export const BodProgramu = ({program} ) => {  
  return (
    <div className="card">
     <div className="image">{program.image} </div>
     <div className="name">{program.name} </div>
     <div className="description">{program.description}</div>
     <div className="website">{program.website}</div>
     <div className="map">{program.map}</div>
      </div>
  )
  }
