import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Navigace } from '../../Components/Navigace/Navigace';
import { DenTitle } from '../../Components/DenTitle/DenTitle';
import { NazevActivity } from '../../Components/NazevActivity/NazevActivity';
import { BodProgramu } from '../../Components/BodProgramu/BodProgramu';

export const ItinerarPage = () => {
  return (
    <>
    <Navigace />
    <PageTitle />
    <DenTitle />
    <NazevActivity />
    <BodProgramu />

   </>
  );
};
