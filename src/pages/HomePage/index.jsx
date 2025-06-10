import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Uvod } from '../../Components/Uvod/Uvod';
import { Carousel} from '../../Components/Carousel/Carousel';
import './style.css';

export const HomePage = () => {
  return (

     <div className="home-page-content">
   <PageTitle />
   <Uvod />
   <Carousel />
   </div>
  
  );
};

