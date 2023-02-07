import {GET_DETAILS,POST_DETAILS,DELETE_DETAILS} from '../type'


const intialState = {
    details:[],
    isresponse:false,
    isDELETEdata:false,
}




const Reducer =(state = intialState,action)=>{
    switch(action.type)
    {
        case GET_DETAILS:
            return{
                details:action.payload
            }
         case POST_DETAILS:
            return{
                isresponse:action.payload
            }  
        case DELETE_DETAILS:
            return{
                isDELETEdata:action.payload
            }    
        default:
            return state;
    }
}
export default Reducer;