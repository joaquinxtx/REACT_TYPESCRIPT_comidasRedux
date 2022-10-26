import React from 'react'
import { Link } from 'react-router-dom';

interface detail{
    jpg:string,
    name:string,
    intruccion:string

}

export const DetailComponents = ({jpg,name,intruccion}:detail) => {
  return (
    <div className="flex mb-20 flex-col m-auto mt-20 items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              
            <img
              src={jpg}
              alt={name}
              className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Nombre:{name} 
              </h5>
             
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                 inst:{intruccion}
              </p>

              <Link to='/category/todos'>
              <button
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                Volver a Productos
               </button>             
              </Link>
              
            </div>
          </div>
  )
}
