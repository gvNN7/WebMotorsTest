import { useContext } from 'react';
import { HeaderContext } from '../contexts/headerContext';
import styles from './car.module.scss';

function Car() {
  const { carsList } = useContext(HeaderContext);

  return ( 
    <div className={styles.carContainer}>
      <div className={styles.listWrapper}>
        {
          carsList.map((car) => {
            return ( 
              <div key={car.id} className={styles.cardWrapper}>
                <img src="./nopicture.jpg" alt="Foto do veículo"/>
                <span className={styles.carName}>
                  <span className={styles.carMake}>{car.make} </span>
                  {car.model}
                </span>
                <span className={styles.carDescription}>{car.version}</span>
                <span className={styles.carPrice}>R$ {car.price}</span>
                <div className={styles.divWrapper}>
                  <span>{car.yearModel}/{car.yearFab}</span>
                  <span>{car.km} km</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Car;