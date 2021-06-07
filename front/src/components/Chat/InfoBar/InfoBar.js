import React from 'react';

//import onlineIcon from '../../icons/onlineIcon.png';
//import closeIcon from '../../icons/closeIcon.png';

import styles from './InfoBar.module.css';

const InfoBar = ({ name }) => (
  <div className={`${styles.infoBar}`}>
    <div className={`${styles.leftInnerContainer}`}>
      <h3>{name}</h3>
    </div>
  </div>
);

export default InfoBar;
