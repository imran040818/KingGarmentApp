import { IS_AUTHENTICATED,LOGIN } from '../actions/actionConstants';
import { GET_EMPLOYEES } from '../actions/actionConstants';

export const employeeReducer = (state = { employees:[], isLoading:true }, action) => {

    switch (action.type) {
        case GET_EMPLOYEES:
            return{
                ...state,
                employees : action.payload,
                isLoading : false
            }; 
        default:
           return state;
    }
}