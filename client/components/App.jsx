import React from 'react';
import Header from '../components/pages/Header.react';
import Main from '../components/pages/Main.react';

export default class App extends React.Component {
  render() {
  	
  	return (
       <div>
       	 <Header />
       	 <Main />
       	 {this.props.children}
       </div>);
  }
}
