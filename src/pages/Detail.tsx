

import { useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { DetailComponents } from "../components/DetailComponents";
import store from '../redux/store';

type RootState = ReturnType<typeof store.getState>;

export const Detail = () => {
  const {detailId} =useParams()

 
  
  const dataReducer = useSelector((state:RootState) => state.dataReducer);
  const meals = dataReducer.data.meals;
  
  const filtro = meals?.filter((tem: any) => tem.idMeal === detailId) 
 
 

  return (
    <>
    

      { filtro?.map((it: any) => {
            return (
              

                <DetailComponents
                
                key={it.idMeal}
                jpg={it.strMealThumb}
                intruccion={it.strInstructions}
                name={it.strMeal}/>         
             
            );
          })}
    
      
        
    </>
  );
};
