
import Axios from 'axios';
import { Dispatch } from "react";
import { Action } from "redux";



export const getData=()=>{
    return{
        type:'FETCHING_DATA'
    }
}
export const getDataSuccess=(data:[])=>{
    return{
        type:'FETCHING_DATA_SUCCESS',
        payload:data
    }
}
export const getDataFailure=(err:string)=>{
    return{
        type:'FETCHING_DATA_FILURE',
        payload:err
    }
}


export const fetchData=()=>{
    return (dispatch: Dispatch<Action>)=>{
        dispatch(getData());
        Axios.get('https://themealdb.com/api/json/v1/1/search.php?s=')
            .then((response:any)=>{
                dispatch(getDataSuccess(response.data))                      
            })
            .catch(error=>{
                dispatch(getDataFailure('No hay nada en la api '))
            })

    }
}




