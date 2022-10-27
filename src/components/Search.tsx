import { useState } from "react";
import { useSelector} from "react-redux";

import { Item } from "./Item";
import store from "../redux/store";

type RootState = ReturnType<typeof store.getState>;

export const Search = () => {
  const [nameFood, setNameFood] = useState("");
  const onChangeComida = (event: any) => {
    setNameFood(event.target.value);
  };

  const dataReducer = useSelector((state: RootState) => state.dataReducer);
  const meals = dataReducer.data.meals;
  const filtro = meals?.filter(
    (food: any) => food.strMeal.toLowerCase() === nameFood
  );

  return (
    <>
      <div className=" flex mt-5 justify-center ">
        <input
          className="border-2 blok border-gray-400 rounded w-3/12 h-10 text-center "
          type="text"
          placeholder="FOOD"
          value={nameFood}
          onChange={onChangeComida}
        />
        <button
          className="text-white ml-2 bg-emerald-600 p-1.5 rounded w-1/12 "
          type="submit"
        >
          Search
        </button>
      </div>

      <div className="flex mt-5 justify-center flex-wrap ">
        {filtro?.map((item: any) => {
          return (
            <Item
              key={item.idMeal}
              img={item.strMealThumb}
              name={item.strMeal}
              id={item.idMeal}
            />
          );
        })}
      </div>
    </>
  );
};
