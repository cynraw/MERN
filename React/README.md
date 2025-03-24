# REACTJS
- React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.
- It focuses on breaking down the UI into reusable components that manage their own state.
- A component can be as small as a button, or as large as an entire page.

### Creating and nesting components
- React components are javascript functions that return markup.
- React component names must always start with a capital letter, while HTML tags must be lowercase.

### Writing markup with JSX 
- JSX is stricter than HTML. You have to close tags like <br />.
- Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper

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
- let content; if (isLoggedIn) { content = <AdminPanel />; } else { content = <LoginForm />; } return ( <div> {content} </div> );

### Rendering lists
- You will rely on JavaScript features like for loop and the array map() function to render lists of components.

### Responding to events 
- You can respond to events by declaring event handler functions inside your components
- Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.

### Updating the screen 
- Often, you’ll want your component to “remember” some information and display it. For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.
- First, import useState from React.
- Now you can declare a state variable inside your component.
- You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). You can give them any names, but the convention is to write [something, setSomething].
- The first time the button is displayed, count will be 0 because you passed 0 to useState(). When you want to change state, call setCount() and pass the new value to it. Clicking this button will increment the counter:

### Using Hooks
- Functions starting with use are called Hooks. useState is a built-in Hook provided by React.
- Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use useState in a condition or a loop, extract a new component and put it there.

### Sharing data between components
- To make both MyButton components display the same count and update together, you need to move the state from the individual buttons “upwards” to the closest component containing all of them.

## Vite
- Vite is a modern frontend build tool and development server that is widely used for building React projects.
- It is designed to provide a fast and efficient development experience.
- Updates are applied instantly without refreshing the entire page, making development smoother.

###  Setting Up Your Vite Project 
- Check Node.js and npm Installation: node -v    # 🔍 Check Node.js version  npm -v     # 🔍 Check npm version
- Create a New React App with Vite:  npm create vite@latest my-react-app --template react  # 🚀 Create your project cd my-react-app npm install  # 🔧 Install dependencies
- Start the Development Server: npm run dev   # ▶️ Start Vite's dev server  Open http://localhost:5173/ in your browser to see your new React app live! 🌐
- Explore the Project Structure:  index.html: The main HTML file.  src/main.jsx: The entry point where React hooks into the DOM. src/App.jsx: The root React component.

#### Vite project structure 
- main.jsx boots up the React app and injects App.jsx into #root in index.html.
- App.jsx defines the main UI structure and serves as the root component.
- index.html → Creates an empty space (<div id="root"></div>) for the show.
- main.jsx → Calls React and tells it to place the App component into #root.
- App.jsx → Displays the actual content (like a webpage with buttons, text, etc.).

### Key Differences Between JSX and HTML
- Attribute Names: Use className in JSX (instead of class in HTML) since class is a reserved word in JavaScript. 
- JavaScript Expressions: Embed dynamic data using curly braces {}. 
- Single Parent Element: JSX must return one parent element. Use fragments (<>...</>) when needed. 

### React Components
- Functional Components: Functions that return JSX. They’re easy to read and test. 
- Props: Inputs to components that allow data to flow from parent to child.
- 
