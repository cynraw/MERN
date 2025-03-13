import {usesate} from 'react';

export default function MyApp(){
  return(
    <div>
      <button> Clicked {count} times</button>
      <button> Clicked {count} times</button>
    </div>
  );
}

function MyButton(){
  const [count, setCount] = usestate(0);
  function handleOnClick(){
    setCount(count + 1);
  }
  return(
    <button onClick = {handleOnClick}>Clicked {count} times</button>
  );
}
