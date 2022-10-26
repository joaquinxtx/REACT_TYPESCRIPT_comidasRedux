import { Link } from "react-router-dom";

 interface ItemProp{
  img:string,
  name:string,
  id:string
}

export const Item = ({img,name,id}:ItemProp) => {
  return (
    <div className="card w-64 m-10 border-2 border-slate-300 rounded-md">
      <img
        src={img}
        alt={name}
      />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{name} </div>
      </div>
      <div className="px-6 py-4">
        <Link to={`/detail/${id}`}>
          <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            VER MAS
          </button>
        
        </Link>
      </div>
    </div>
  );
};
