import React from 'react'
import styles from './BurgerConstructor.module.css'
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {data} from '../../utils/data.js';
import TotalPrice from '../TotalPrice/TotalPrice';
// height:'656px'
// overflowY:'scroll' 
// className="custom-scrollbar"

function BurgerConstructor(props) {
  return (
    <>
      <div className='pl-4'>
        <div className="custom-scroll" style={{paddingRight:'8px', display: 'flex', flexDirection: 'column', alignItems:'flex-end', gap: '16px', maxWidth: '656px', marginTop:'100px', overflowY:'scroll' }}>
          <div className={`${styles.ingredient}`}>
            {/* <DragIcon type="primary" /> */}
            <ConstructorElement
              type="top"
              isLocked={true}
              text={data[0].name}
              price={data[0].price}
              thumbnail={data[0].image}
            />
          </div>
          <div className={`${styles.ingredient}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={data[5].name}
              price={data[5].price}
              thumbnail={data[5].image}
            />
          </div>
          <div className={`${styles.ingredient}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={data[4].name}
              price={data[4].price}
              thumbnail={data[4].image}
            />
          </div>
          <div className={`${styles.ingredient}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={data[7].name}
              price={data[7].price}
              thumbnail={data[7].image}
            />
          </div>
          <div className={`${styles.ingredient}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={data[8].name}
              price={data[8].price}
              thumbnail={data[8].image}
            />
          </div>
          <div className={`${styles.ingredient}`}>
            <DragIcon type="primary" />
            <ConstructorElement
              isLocked={false}
              text={data[8].name}
              price={data[8].price}
              thumbnail={data[8].image}
            />
          </div>
          <div className={`${styles.ingredient}`}>
            {/* <DragIcon type="primary" /> */}
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={data[0].name}
              price={data[0].price}
              thumbnail={data[0].image}
            />
          </div>
        </div>
          <TotalPrice setPopupClosed={props.setPopupClosed} />
      </div>
    </>

  )
}

export default BurgerConstructor