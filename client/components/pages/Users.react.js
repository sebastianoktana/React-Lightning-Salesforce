import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { showUsers } from '../../actions/AppActions';
import Loading from './LoadingIndicator.react';
import { getUsersFromSalesforce } from '../../actions/AppActions';
import {request} from '../../constants/AppConstants'


class Users extends Component {


  componentWillMount(){
      //this.props.showUsers();
      this.props.getUsersFromSalesforce();
   }
  renderUserList(){
  	console.log(request);
   	return this.props.users.map((user) =>{
      return (
		  <tr key={user.Id}>
          	<td className="slds-row-select">
		       <label className="slds-checkbox">
		          <input className="select-row1" type="checkbox" id="select-row1" />
		          <span className="slds-checkbox--faux"></span>
		          <span className="slds-form-element__label slds-assistive-text"></span>
		        </label>
		      </td>
            <td>{user.Name}</td>
            <td>{user.Department}</td>
            <td>{user.FirstName}</td>
            <td>{user.LastName}</td>
            <td>{user.Email}</td>
           </tr>
         )
       })
   }
  
   render() {
	 const Loader = !this.props.users ? ( <Loading /> ) : ("");
    return (
		<div className="slds-box">
			{Loader}
        	<br /><br />
        	<table className="slds-table slds-table--bordered slds-max-medium-table--stacked">
			  <thead>
			    <tr className="slds-text-heading--label">
			      <th className="slds-row-select" scope="col">
			        <label className="slds-checkbox">
			          <input name="checkbox" type="checkbox" id="select-all" />
			          <span className="slds-checkbox--faux"></span>
			          <span className="slds-form-element__label slds-assistive-text">select all</span>
			        </label>
			      </th>
			      <th className="slds-is-sortable" scope="col">
			        <span className="slds-truncate">Name</span>
			        <button className="slds-button slds-button--icon-bare">
			          <svg aria-hidden="true" className="slds-button__icon slds-button__icon--small">
			          </svg>
			          <span className="slds-assistive-text">Sort</span>
			        </button>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Department</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">First Name</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Last Name</span>
			      </th>
			      <th scope="col">
			        <span className="slds-truncate">Email</span>
			      </th>
			    </tr>
			  </thead>
			  <tbody>
			  	{this.renderUserList()}
			 </tbody>
			</table>
      </div>
     );
  }



}

function mapStateToProps (state) {
     return {
        users: state.list
     }
}

export default connect(mapStateToProps,{getUsersFromSalesforce})(Users);
