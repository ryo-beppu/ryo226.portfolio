import React from 'react';
import Vivus from 'vivus';
import '../../sass/opening.scss';
import svg from '../../images/opening/OpeningAnim.svg';

class Opening extends React.Component {
  componentDidMount(){
    new Vivus('loadAnim', {file:svg,type:'scenario-sync'});
  }

  render() {
    return (
      <div id="load" >
        < div id="loadAnim" ></div>
      </div >
    )
  }
};

export default Opening;