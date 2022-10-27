import { Item } from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/actions/buscarComidas";
import { useParams } from "react-router-dom";
import { Loading } from "./loading/Loading";

export const ItemList = () => {
  const { id } = useParams();

  const dispatch: any = useDispatch();
  const dataReducer = useSelector((state) => state.dataReducer);
  const meals = dataReducer.data.meals;

  const filtro = meals?.filter((food: any) => food.strCategory === id);

  useEffect(() => {
    dispatch(fetchData());
  }, [id]);

  return (
    <div className="flex  justify-center flex-wrap mb-28 ">
      {dataReducer.isFetching && <Loading/>}

      {id === "todos"
        ? meals?.map((item: any) => {
            return (
              <Item key={item.idMeal} img={item.strMealThumb} name={item.strMeal} id={item.idMeal} />
            );
          })
        : filtro?.map((item: any) => {
            return (
              <Item key={item.idMeal} img={item.strMealThumb} name={item.strMeal} id={item.idMeal} />
            );
          })}
    </div>
  );
};
