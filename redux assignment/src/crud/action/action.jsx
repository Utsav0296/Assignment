import { GET_DETAILS,POST_DETAILS } from "../type";
import { GetApiDetails,PostApiDetails,DeleteApiDetails } from "../../API/axiosrequest"; 

const GetApiAction=()=>{
    return function(dispatch){
       return GetApiDetails().then((res)=>{
        console.log(res);
        dispatch({
            type:"GET_DETAILS",
            payload:res.data,
        })
       })
    }
}

const PostApiAction=(request)=>{
    return function(dispatch){
       return PostApiDetails(request).then((res)=>{
        console.log("responsive post called ... ", res);
        dispatch({
            type:"POST_DETAILS",
            payload:"",
        })
       })
    }
}

const DeleteApiAction=(id)=>{
    return function(dispatch){
       return DeleteApiDetails(id).then((res)=>{
        console.log(res);
        dispatch({
            type:"DELETE_DETAILS",
            payload:true,
        })
       })
    }
}

export  {PostApiAction,GetApiAction,DeleteApiAction};

