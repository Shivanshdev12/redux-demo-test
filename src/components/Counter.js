import { useSelector, useDispatch } from "react-redux";
import classes from './Counter.module.css';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => { };

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const incrementBy5Handler = () => {
    dispatch({ type: 'IncrementBy5' })
  }

  const decrementBy5Handler = () => {
    dispatch({ type: 'DecrementBy5' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementBy5Handler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;