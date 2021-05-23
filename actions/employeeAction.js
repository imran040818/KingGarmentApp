import { GET_EMPLOYEES } from './actionConstants';

export const getEmployees = ()=> {
    return function(dispatch) {
        return dispatch({
            type: GET_EMPLOYEES,
            payload: [{"Name":"Ïmran"},{"Name":"Inu"}]
        })
    }
}
