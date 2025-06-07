import './mestoPage.css';

import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Navigace } from '../../Components/Navigace/Navigace';
import { MestoTitle } from '../../Components/MestoTitle/MestoTitle';
import { MestoSubtitle } from '../../Components/MestoSubtitle/MestoSubtitle';
import { Den } from '../../Components/Den/Den';

export const MestoPage = ({ city }) => {
  return (
    <>
      <Navigace />
      <PageTitle />
      <MestoTitle name={city.name} />
      <MestoSubtitle description={city.description} />
      <div className="day-buttons-container">
        <Den day={'pátek'} />
        <Den day={'sobota'} />
        <Den day={'neděle'} />
      </div>
    </>
  );
};
