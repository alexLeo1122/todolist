import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  decrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';
import { selectInpValue } from '../inputField/inputSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const inpSteps = Number(useSelector(selectInpValue))
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(inpSteps))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(inpSteps))}
        >
          Add Async
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(decrementAsync(inpSteps))}
        >
          Substract Async
        </button>
 
   
      </div>
    </div>
  );
}
