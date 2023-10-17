import React from 'react';
import { apple, bill, google } from '../assets/index.js';
import styles, { layout } from '../style.js';

const Billing = () => {
  return (
    <section className={layout.sectionReverse} id={'product'}>
      <div className={layout.sectionImgReverse}>
        <img className={'w-[100%] h-[100%] relative z-[5]'} src={bill} alt='billing' />

        <div className={'absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient'} />

        <div className={'absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient'} />
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className={'sm:block hidden'} /> billing & invoicing.
        </h2>

        <p className={`${styles.paragraph} max-w-470px mt-5`}>
          From its medieval origins to the digital era, learn everything there is to know about the
          ubiquitous lorem ipsum passage.
        </p>

        <div className={'flex flex-row flex-wrap sm:mt-10 mt-6'}>
          <img
            className={'w-[128px] h-[42px] object-contain mr-5 cursor-pointer'}
            src={apple}
            alt='appleStore'
          />
          <img
            className={'w-[128px] h-[42px] object-contain cursor-pointer'}
            src={google}
            alt='googlePlay'
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
