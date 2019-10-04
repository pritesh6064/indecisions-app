
let count = 0;

const addOne = () => {
  count++;
  rendercounterApp();  
};
const minusOne = () => {
  count--;
  rendercounterApp();
};
const reset = () => {
  count = 0;
  rendercounterApp();  
};




const rendercounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
};
rendercounterApp();