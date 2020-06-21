import React, { useEffect } from 'react';
import Vivus, { VivusOptions } from 'vivus';
import '../../sass/opening.scss';
import Svg from '../../images/opening/OpeningAnim.svg';

const Opening: React.FC<VivusOptions> = () => {
  useEffect(() => {
    new Vivus('loadAnim', { file: Svg, type: 'scenario-sync' });
  }, []);

  return (
    <div id="load">
      <div id="loadAnim" />
    </div>
  );
};

export default Opening;
