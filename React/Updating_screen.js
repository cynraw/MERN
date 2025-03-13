import { usestate } from 'react';

function MyButton(){
  const [count, setCount] = usesate(0);

  function handleOnClick(){
    setCount(count + 1);
  }

  return(
    <h1> Updating count using usestate</h1>
    <button onClick = {handleOnClick}>Clicked {count} times</button>
  )
}


