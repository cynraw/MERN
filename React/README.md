# REACTJS
- React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.
- A component can be as small as a button, or as large as an entire page.


### Creating and nesting components
- React components are javascript functions that return markup.
- React component names must always start with a capital letter, while HTML tags must be lowercase.
  
### Writing markup with JSX
- JSX is stricter than HTML. You have to close tags like
.
- Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a
...
or an empty <>...</> wrapper

### Adding styles
- In React, you specify a CSS class with className. It works the same way as the HTML class attribute.
- Then you write the CSS rules for it in a separate CSS file.
  
### Displaying data
- JSX lets you put markup into JavaScript. Curly braces let you “escape back” into JavaScript so that you can embed some variable from your code and display it to the user.
- For example, this will display user.name: return (h1 {user.name} /h1);
- You can also “escape into JavaScript” from JSX attributes, but you have to use curly braces instead of quotes.
- For example, className="avatar" passes the "avatar" string as the CSS class, but src={user.imageUrl} reads the JavaScript user.imageUrl variable value, and then passes that value as the src attribute
  
### Conditional rendering
- In React, there is no special syntax for writing conditions.
- Instead, you’ll use the same techniques as you use when writing regular JavaScript code. For example, you can use an if statement to conditionally include JSX:
- let content; if (isLoggedIn) { content = ; } else { content = ; } return (
{content}
);

### Rendering lists
- You will rely on JavaScript features like for loop and the array map() function to render lists of components.
