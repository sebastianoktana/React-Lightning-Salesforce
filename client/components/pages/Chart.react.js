import React , {PropTypes} from 'react';
import { connect } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';


const Chart = (props) => {

  const data = {
    labels: [
      'Stocks',
      'Bonds',
      'ETFs',
      'Cash',
      'Commodities',
    ],
    datasets: [{
      data: props.risk || [200, 20, 200, 10, 20],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#0000FF',
        '#000000',

      ],
      hoverBackgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#0000FF',
        '#000000',
      ],
   }],
  };

  return (
   <div>
    <Doughnut data={data} />
   </div>
 );
};


const mapStateToProps = (state) => ({
  risk: state.data
});

export default connect(mapStateToProps)(Chart);

 

