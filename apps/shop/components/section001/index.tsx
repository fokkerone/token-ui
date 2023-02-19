import React from 'react';
import styles from './styles.module.scss';

const Section001 = () => {
  return (
    <section className={styles['section']}>
      <div className={styles['grid']}>
        <div>
          <h1>Rundum sorglos Autofahren</h1>
          <ul>
            <li>Inklusive Versicherung, Steuer und TÜV</li>
            <li>Inklusive Versicherung, Steuer und TÜV</li>
            <li>Inklusive Versicherung, Steuer und TÜV</li>
          </ul>
        </div>
        <div>
          <img src="https://dummyimage.com/600x400/000/fff" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section001;
