import { useState } from "react";

const App = () => {
    let [counter, setCounter]= useState<number>(0)
    console.log('mount')
    return (
        <div>
          <h2>{counter}</h2>
            <button onClick={()=>{
                setCounter(++counter);
                console.log(counter)
            }}>increment</button>
            <button onClick={()=>{
                setCounter(prevState => {
                    return --prevState
                });
                console.log(counter)
            }}>decrement</button>
        </div>
    );
};

export default App;