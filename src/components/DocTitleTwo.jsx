import useCounter from "./hooks/useCounter";

const DocTitleTwo = () => {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>react</button>
    </div>
  );
};

export default DocTitleTwo;
