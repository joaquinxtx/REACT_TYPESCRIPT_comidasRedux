import { Item } from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData } from "../redux/actions/buscarComidas";
import { useParams } from "react-router-dom";

export const ItemList = () => {
  const { id } = useParams();

  const dispatch: any = useDispatch();
  const dataReducer = useSelector((state) => state.dataReducer);
  const meals = dataReducer.data.meals;

  const filtro = meals?.filter((tem: any) => tem.strCategory === id);

  useEffect(() => {
    dispatch(fetchData());
  }, [id]);

  return (
    <div className="flex  justify-center flex-wrap">
      {dataReducer.isFetching && <span>Buscandoooo</span>}

      {id === "todos"
        ? meals?.map((it: any) => {
            return (
              <Item key={it.idMeal} img={it.strMealThumb} name={it.strMeal} id={it.idMeal} />
            );
          })
        : filtro?.map((it: any) => {
            return (
              <Item key={it.idMeal} img={it.strMealThumb} name={it.strMeal} id={it.idMeal} />
            );
          })}
    </div>
  );
};
