import React from 'react';
import ReactVivus from 'react-vivus';
import '../../sass/opening.scss'
import svg from '../../images/opening/OpeningAnim.svg';

const Opening = () => (
  <div id="load">
    <ReactVivus
      id="loadAnim"
      option={{
        file: svg,
        type: 'scenario-sync',
        onReady: console.log
      }}
      callback={console.log}
    />
  </div>
);
export default Opening;