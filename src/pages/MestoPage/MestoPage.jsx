import './MestoPage.css';
import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Navigace } from '../../Components/Navigace/Navigace';
import { MestoTitle } from '../../Components/MestoTitle/MestoTitle';
import { MestoSubtitle } from '../../Components/MestoSubtitle/MestoSubtitle';
import { Den } from '../../Components/Den/Den';
import { Link } from 'react-router-dom';

export const MestoPage = ({ city }) => {
  return (
    <div className="mesto-page-container">
      <Navigace />
      <PageTitle />
      <MestoTitle name={city.name} />
      <MestoSubtitle description={city.description} />
      <div className="day-buttons-container">
        <Link to="/itinerar/pátek">
          <Den day={'pátek'} />
        </Link>
        <Link to="/itinerar/sobota">
          <Den day={'sobota'} />
        </Link>
        <Link to="/itinerar/neděle">
          <Den day={'neděle'} />
        </Link>
      </div>
    </div>
  );
};
