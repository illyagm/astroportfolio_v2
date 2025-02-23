import React from 'react';
import styles from '../../App.module.scss';
import mygearStyles from './MyGear.module.scss';
import mygear from '../../assets/gear.jpg';
import classNames from 'classnames';
import Card from '@components/ui/Card';

const MyGear: React.FC = () => {
  return (
    <>
      <div className={mygearStyles['content-title']}>
        <div className={mygearStyles.titleText}>
          <h1>My Gear</h1>
        </div>
      </div>
      <div
        className={classNames(
          mygearStyles.container,
          mygearStyles['about-container'],
        )}
      >
        <div className={classNames(styles.grid2, mygearStyles.content)}>
          <div>
            <h2 className={mygearStyles['content-title']}>
              Omegon 400mm & veTEC533 C
            </h2>
            <p>
              <strong>Scope: </strong>{' '}
              <a
                className={mygearStyles.productLink}
                href="https://www.astroshop.es/telescopios/omegon-refractor-apocromatico-pro-apo-ap-72-400-doublet-ota-de/p,60853"
              >
                Omegon APO 72ED, 400mm x 72mm doublet
              </a>
            </p>
            <p>
              <strong>Guidescope: </strong>{' '}
              <a
                className={mygearStyles.productLink}
                href="https://www.astroshop.eu/optical-finders/orion-mini-50mm-guide-scope/p,23580"
              >
                Orion, 162mm x 50mm
              </a>
            </p>
            <p>
              <strong>Main camera: </strong>
              <a
                className={mygearStyles.productLink}
                href="https://www.astroshop.es/camaras-para-astronomia/omegon-camara-vetec-533-c-color/p,67319"
              >
                Omegon veTEC533c astro-dedicated camera.
              </a>
            </p>
            <p>
              <strong>Guide camera: </strong>
              <a
                className={mygearStyles.productLink}
                href="https://www.astroshop.es/camaras-para-astronomia/zwo-camara-asi-120mm-mini-mono/p,59338"
              >
                ZWO ASI 120MM Mini Mono
              </a>
            </p>
            <p>
              <strong>Filter used: </strong>
              <a
                className={mygearStyles.productLink}
                href="https://www.astroshop.es/filtros-uhc/optolong-filtro-l-extreme-2-/p,66894"
              >
                Optolong L-Extreme{' '}
              </a>
              /
              <a
                className={mygearStyles.productLink}
                href="https://www.amazon.es/Svbony-Telescopio-Reducci%C3%B3n-Contaminaci%C3%B3n-Observaciones/dp/B07G943LQ3"
              >
                {' '}
                Svbony UHC 2''{' '}
              </a>
            </p>
            <p>
              <strong>Mount: </strong>
              <a
                className={mygearStyles.productLink}
                href="https://www.astroshop.es/ecuatorial-con-goto/skywatcher-montura-eq6-r-pro-synscan-goto/p,53080"
              >
                Skywatcher EQ6-R pro
              </a>
            </p>
            <p>
              <strong>Controller:</strong>{' '}
              <a
                className={mygearStyles.productLink}
                href="https://www.amazon.es/db-tronic-Raspberry-iniciaci%C3%B3n-alimentaci%C3%B3n-ventilador/dp/B0CRPF47RG"
              >
                Rasberry Pi5 with StellarMate software.
              </a>
            </p>
            <p>
              Stellarmate OS for Raspberry PI{' '}
              <a
                style={{ color: 'red' }}
                className={mygearStyles.productLink}
                href="https://www.stellarmate.com/products/stellarmate-os/stellarmate-os-detail.html"
              >
                here{' '}
              </a>
            </p>
            <hr />
            <h3>Total gear cost: 4k~</h3>
            <p>
              <i>
                Here additionally you will need a device in order to controll
                the equipment (laptop/mobile phone)
              </i>
            </p>
          </div>
          <img
            src={mygear}
            width={300}
            height={380}
            className={mygearStyles['content-image']}
          />
        </div>
        <div
          className={classNames(
            styles.grid,
            mygearStyles['justify-items-end'],
            mygearStyles.content,
          )}
        ></div>
      </div>
    </>
  );
};

export default MyGear;
