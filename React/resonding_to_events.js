function myButton(){
  function handleClick(){
    alert("You clicked me");
  }
  return(
    <button onclick = {handleClick}>Click me</button>
  );
}
