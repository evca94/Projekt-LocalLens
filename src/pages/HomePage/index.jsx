import { PageTitle } from '../../Components/PageTitle';
import { Uvod } from '../../Components/Uvod';
import { Navigace } from '../../Components/Navigace';
import './style.css';
import { MestoTitle } from '../../Components/MestoTitle';
import { MestoSubtitle } from '../../Components/MestoSubtitle';

export const HomePage = () => {
  return (
    <>
   <PageTitle />
   <Uvod />
   <Navigace />
   <MestoTitle />
   <MestoSubtitle />
   </>
  );
};
