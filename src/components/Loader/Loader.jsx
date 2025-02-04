import React from 'react';
import { Circles } from 'react-loader-spinner'; 

const Loader = () => (
  <div className={styles.loader}>
    <Circles color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
