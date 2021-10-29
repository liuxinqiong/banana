import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.less';

const Home: React.FC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <Link to="/page1">page1</Link>
      </header>
    </div>
  );
};

export default Home;
