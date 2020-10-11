import { createConnect } from 'overmind-react';
import React, { useEffect } from 'react';


const connect = createConnect();


function App({ overmind }) {
  const { state, actions } = overmind;

  useEffect(() => {
    console.log(state);
    console.log(actions);
  });

  return (
    <div>
      <div>
        <button onClick={actions.counter.increment}>+</button>
        { state.counter.counter }
        <button onClick={actions.counter.decrement}>-</button>
      </div>
      <br/>
      <div>
        <button onClick={actions.test.increment}>+</button>
        { state.test.counter }
        <button onClick={actions.test.decrement}>-</button>
      </div>
    </div>
  );
}

export default connect(App);
