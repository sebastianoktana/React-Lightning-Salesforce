
import { SET_ERROR_MESSAGE, CHANGE_RISK ,SHOW_USERS, request} from '../constants/AppConstants';
import * as errorMessages  from '../constants/MessageConstants';
import { browserHistory } from 'react-router';
import axios from 'axios';


//ger users with jsonplaceholder
export function showUsers() {
  return (dispatch,getState) =>{
    axios.get('https://jsonplaceholder.typicode.com/users').
    then( (response) => { 
          dispatch( { type:SHOW_USERS,payload:response.data } )
      } 
    )}
 }

//Get user from Salesforce Controller
 export function getUsersFromSalesforce() {
 	return (dispatch,getState) =>{
     return new Promise((resolve, reject) => {
		UserController.findAll(function(err, response){
			if(response.result){
				var res = Object.values(response.result);
				resolve(dispatch({ type:SHOW_USERS,payload:res}))	
			}else{
				reject(event);
			}
         });
	   })
    
     }
 }
//Chart action
export function changeRiskAction (risk){
  return {type: CHANGE_RISK,risk}
}


function forwardTo(location) {
  console.log('forwardTo(' + location + ')');
  browserHistory.push(location);
}
