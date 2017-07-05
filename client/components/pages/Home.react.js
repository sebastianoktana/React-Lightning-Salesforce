import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link , BrowserRouter as Route} from 'react-router-dom';
import Chart from './Chart.react';
import ChangeRisk from './ChangeRisk.react';
import { changeRiskAction } from '../../actions/AppActions';

 

class Home extends Component {
	render() {
    
			return (
			    <div className="slds-box">
              <br />
              <br />
              <Chart data={this.props.data.risk} />
        			<ChangeRisk data={this.props.data} onChange={this.props.onChange} />       
				 </div>
			 );
  		}
}

const mapDispatchToProps = dispatch => ({
      onChange: (risk) => {
        dispatch(changeRiskAction(risk));
      },
});

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select,mapDispatchToProps)(Home);
