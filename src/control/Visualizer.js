import React from 'react'
import "./Visualizer.css"   

function Visualizer({array}) {
    console.log(array);
    
return (
    <div className="array-container">
        {array.map((item,index)=> (
            <div  
    key={index}
    className="bar"
    style={{
    height: `${item}px`,
    width: '30px', // optional width
    display: 'flex',
    color: 'black',
    fontWeight: 'bold'}}>

        {item}
        
        </div>
        ))}
        
    </div>
)
}

export default Visualizer
