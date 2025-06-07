import { PageTitle } from '../../Components/PageTitle';
import { Navigace } from '../../Components/Navigace';
import './style.css';
import { DenTitle } from '../../Components/DenTitle';
import { NazevActivity } from '../../Components/NazevActivity';
import { BodProgramu } from '../../Components/BodProgramu';

export const ItinerarPage = () => {
  return (
    <>
   <PageTitle />
   <Navigace />
    <DenTitle />
    <NazevActivity />
    <BodProgramu />

   </>
  );
};
