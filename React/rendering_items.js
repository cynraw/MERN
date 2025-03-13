const products = [
  { title: 'cabbage', id: 1 },
  { title: 'carrots', id: 2 },
  { title: 'spinach', id: 3}
];

const listItems = products.map(product => 
                              <li key = {product.id}>
                               {product.title}
                               </li>  
 );

return (
  <ul>{listItems}</ul>
);
//Notice how <li> has a key attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. 
//Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.
