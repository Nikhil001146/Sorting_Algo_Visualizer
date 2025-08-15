import React from 'react'

function control({handleNewArrayGenrate ,setSpeed,isSorting, handleSorting ,userInputArray, setUserInputArray,reSet,selectedSorting}) {
return (
    <div className='controls-container'>
        <div className="input-wrapper">
            <input type="text" value={userInputArray} onChange={(e) => setUserInputArray(e.target.value)}className="neumorphic-input" placeholder="Enter your Array between 1-500" />
            <div className="info-icon-wrapper">
                <i className="info-icon">i</i>
                <span className="tooltip-text">Provide your Array by comma separated integer</span>
            </div>
        </div>
        <button className='neu-button' onClick={handleNewArrayGenrate}>Generate New Array</button>
        <button className='neu-button' onClick={reSet}>
            Reset
        </button>
        <select className='neumorphism-dropdown' onChange={handleSorting}>
            <option value=''>Select Sorting</option>
            <option value='bubbleSort'>Bubble Sorting</option>
            <option value='mergeSort'>Merge Sorting</option>
            <option value='selectionSort'>Selection Sorting</option>
        </select>
        <label>
            speed:
            <input
                type='range'
                min='10'
                max='200'
                className= "speedControl"
                onChange={(e) => setSpeed(200 - e.target.value)}
                disabled ={isSorting}
                />
        </label>
    </div>
)
}


export default control
