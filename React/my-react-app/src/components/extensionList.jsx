import React from 'react';
import './extensionList.css';

function ExtensionList(props) {
    return(
        <div className='ExtensionListBody'>
            <div className='ExtensionBar'>
                <h3>Extensions</h3>
                <img src="/icon-moon.svg" alt="moon" className='moonimage'/>
            </div>
            <div className='ExtensionListHeader'>
                <h1><b>Extensions List</b></h1>
                <div className='Buttons'>
                    <button className='button1'>All</button>
                    <button className='button2'>Active</button>
                    <button className='button3'>Inactive</button>
               </div>
            </div>
            <div className='extensionBoxes'>
                
            </div>

        </div>
    );

}

export default ExtensionList;