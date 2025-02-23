import React from 'react';
import styles from '../../App.module.scss';
import aboutstyles from './About.module.scss';
import soulNebula from '../../assets/soulNebula.jpg';
import classNames from 'classnames';

const About: React.FC = () => {
  return (
    <>
      {' '}
      <div className={aboutstyles['content-title']}>
        <div className={aboutstyles.titleText}>
          <h1>About Me</h1>
        </div>
      </div>
      <div
        className={classNames(
          aboutstyles.container,
          aboutstyles['about-container'],
        )}
      >
        <div
          className={classNames(
            styles.grid2,
            aboutstyles['justify-items-end'],
            aboutstyles.content,
          )}
        >
          <div>
            <p>
              My name is Illya. I was born in 1998, and growing up, I've always
              been fascinated by the night sky and the mysteries of the
              universe.
            </p>
            <p>
              I'm passionate about capturing the beauty and wonder of the
              cosmos. My journey in this fascinating hobby began in 2018, and
              I've been hooked ever since.
            </p>
            <p>
              It wasn't until a few years ago that I picked up my camera and
              started exploring the world of astrophotography. My passion for
              this hobby stems from the fact that it allows me to capture the
              beauty of the cosmos and share it with others.
            </p>
            <p>
              There's something truly awe-inspiring about capturing a nebula or
              a galaxy millions of light-years away and bringing it to life
              through photography. It's a way of experiencing the universe in a
              whole new way, and I'm grateful for the opportunity to do so.
            </p>
          </div>
          <img
            src={soulNebula}
            width={350}
            height={350}
            className={aboutstyles['content-image']}
          />
        </div>

        <div
          className={classNames(
            styles.grid,
            aboutstyles['justify-items-end'],
            aboutstyles.content,
          )}
        >
          <p>
            I look forward to continuing this journey and capturing more
            breathtaking images of the cosmos. 🚀🌌📸 #astrophotography #cosmos
            #nightphotography #passion
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
