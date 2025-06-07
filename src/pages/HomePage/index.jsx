import { PageTitle } from '../../Components/PageTitle';
import { Uvod } from '../../Components/Uvod';
import { Navigace } from '../../Components/Navigace';
import './style.css';
import { MestoTitle } from '../../Components/MestoTitle';
import { MestoSubtitle } from '../../Components/MestoSubtitle';
import { Den } from '../../Components/Den';
import { DenTitle } from '../../Components/DenTitle';
import { NazevActivity } from '../../Components/NazevActivity';
import { BodProgramu } from '../../Components/BodProgramu';

export const HomePage = () => {
  return (
    <>
   <PageTitle />
   <Uvod />
   <Navigace />
   <MestoTitle />
   <MestoSubtitle />
   <div className='day-buttons-container'>
    <Den /></div>
    <DenTitle />
    <NazevActivity />
    <BodProgramu />

   </>
  );
};
