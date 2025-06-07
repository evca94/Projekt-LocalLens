import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Navigace } from '../../Components/Navigace/Navigace';
import { MestoTitle } from '../../Components/MestoTitle/MestoTitle';
import { MestoSubtitle } from '../../Components/MestoSubtitle/MestoSubtitle';
import { Den } from '../../Components/Den/Den';


export const MestoPage = () => {
  return (
    <>
   <PageTitle />
   <Navigace />
   <MestoTitle />
   <MestoSubtitle />
   <div className='day-buttons-container'>
    <Den /></div>
   </>
  );
};
