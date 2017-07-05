import React, { Component } from 'react';
import { Link , BrowserRouter as Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home.react';

class Nav extends Component {
	render() {
		return (
    		<div>
    		   <div className="slds-tabs--default">
				  <ul className="slds-tabs--default__nav" role="tablist">
				    <li className="slds-tabs--default__item slds-text-heading--label slds-active" title="Dashboard" role="presentation"><Link className="slds-tabs--default__link" to='/'>Dashboard</Link></li>
				    <li className="slds-tabs--default__item slds-text-heading--label" title="Users"role="presentation"><Link className="slds-tabs--default__link" to='/users'>Users</Link></li>
				  </ul>
				</div>
			  </div>
			);
  		}
}


export default Nav;