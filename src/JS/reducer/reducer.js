import React from "react";
import { SETUSER, SETCOMMENT, SETPOST } from "../constants/actionTypes";
const initialState={
    user:[],
    post:[],
    comment:[],
}
const Reducer =(state=initialState,action)=>{
    switch(action.type){
        case SETUSER:return{
            ...state,
            user:action.payload
        };
      case SETPOST:return{
            ...state,
            post:action.payload
};
  case SETCOMMENT:return{
            ...state,
            comment:action.payload
  };
  default:state;
}
};
export default Reducer;