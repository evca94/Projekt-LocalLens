import { PageTitle } from '../../Components/PageTitle/PageTitle';
import { Navigace } from '../../Components/Navigace/Navigace';
import { DenTitle } from '../../Components/DenTitle/DenTitle';
import { NazevActivity } from '../../Components/NazevActivity/NazevActivity';
import { BodProgramu } from '../../Components/BodProgramu/BodProgramu';
import { useParams } from 'react-router-dom';
import  itinerary from '../../../data/itinerary.json'
import { Category } from '../../Components/Category/Category';

export const ItinerarPage = () => {
const {den} = useParams();
const filteredItinerar = itinerary.filter((item => den === item.day))
const categories = ["Snídaně","Dopolední aktivity", "Oběd", "Odpolední aktivity", "Sportovní aktivity", "Večeře", "Večerní program" ]



  return (
    <>
<<<<<<< HEAD
    <Navigace />
    <PageTitle />
    <DenTitle />
    <NazevActivity />
    <BodProgramu />
=======
   <PageTitle />
   <Navigace />
    <DenTitle 
    dayTitle={den} />
    {categories.map((category) => {
      const filteredItems = filteredItinerar.filter((item ) => category === item.category)
    
      return (
        <Category 
        key={category}
        name={category} items={filteredItems} />
      )
    }
    )
    }
>>>>>>> cde421adc1d43d4ac1ee8b3ea1fa3c3fb7fe1138

   </>
  );
};
