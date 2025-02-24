import React, { useEffect, useState } from 'react';
import Card from '../../components/ui/Card';
import homeStyles from './Home.module.scss';
import appStyles from '../../App.module.scss';
import classNames from 'classnames';
import horsehead from '../../assets/horsehead.jpg';
import soulNebula from '../../assets/soulNebula.jpg';
import eagleNebula from '../../assets/eagleNebula.png';
import AnimateDiv from '@components/AnimateDiv';

const Home: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [width, setWidth] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        console.log('down');
        // Scrolling down, increase width
        setWidth((prevWidth) => Math.min(prevWidth + 0.6, 100));
      } else if (currentScrollY < lastScrollY) {
        console.log('up');
        // Scrolling up, decrease width
        setWidth((prevWidth) => Math.max(prevWidth - 0.6, 80)); // Decrease width but not below 60%
      }
      console.log(width);
      setLastScrollY(currentScrollY); // Corrected: update with current scroll position
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); // Dependency array should track lastScrollY changes

  return (
    <>
      <div
        className={homeStyles.contentContainer}
        style={{ filter: width > 85 ? `blur(4px)` : `blur(0)` }}
      >
        <div className={homeStyles.titleText}>
          <h1>Urban Astrophotography</h1>
        </div>
      </div>
      <AnimateDiv>
        <div
          className={homeStyles.container}
          style={{
            width: width + 'vw',
            borderRadius: width === 100 ? 0 : '26px',
          }}
        >
          <Card
            nostyle={true}
            content={
              <div className={classNames(appStyles.grid3)}>
                <Card backgroundImage={eagleNebula} />
                <Card backgroundImage={horsehead} />
                <Card backgroundImage={soulNebula} />
              </div>
            }
          />
          <Card
            nostyle={true}
            content={
              <h1>
                <q>
                  <i>
                    The nitrogen in our DNA, the calcium in our teeth, the iron
                    in our blood, the carbon in our apple pies were made in the
                    interiors of collapsing stars. We are made of starstuff.
                  </i>
                </q>
                <p> ― Carl Sagan, Cosmos</p>
              </h1>
            }
          />
        </div>
      </AnimateDiv>
    </>
  );
};

export default Home;
