import React from 'react';
import Profile from './components/Profile';
import Products from './components/Products';
import './App.css';

function App() {
    return(
        <div>
            <Profile firstName = "Cheptanui" secondName= "Ronoh" age="23"/>
            <div className='myProducts'>
                <Products/>
                <Products/>
                <Products/>
            </div>
            <div className='myProducts'>
                <Products/>
                <Products/>
                <Products/>
            </div>
        </div>
    );
}

export default App;