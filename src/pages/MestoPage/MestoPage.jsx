import { PageTitle } from '../../Components/PageTitle';
import { Navigace } from '../../Components/Navigace';
import { MestoTitle } from '../../Components/MestoTitle';
import { MestoSubtitle } from '../../Components/MestoSubtitle';
import { Den } from '../../Components/Den';


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
