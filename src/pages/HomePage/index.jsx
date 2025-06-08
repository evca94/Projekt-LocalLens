import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Uvod } from '../../Components/Uvod/Uvod';
import { Carousel} from '../../Components/Carousel/Carousel';

export const HomePage = () => {
  return (
    <>
   <PageTitle />
   <Carousel />
   <Uvod />
   </>
  );
};

