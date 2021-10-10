import React from 'react'
import Parametr from './../ComparisonPage/Parametr';

function Parametrs({ data, screen }) {
    const { display, camera, CPU, memory, RAM, battery, type, protection } = data

    let parametrs = type === 'gadgets'
        ?
        [['Battery', battery], ['Protection', protection]]
        :
        [['Camera', camera], ['CPU', CPU], ['Battery', battery]]
    
    return (
        <div className='container text-center'>
            <div className="row">
                <div className="col">
                    <h4>Screen diagonal</h4>
                    <Parametr parametr={display} logo={'display'}/>
                    <h6>{screen}</h6>
                </div>
                <div className="col">
                    <h4>Memory</h4>
                    <Parametr parametr={memory} logo={'memory'} RAM={RAM}/>
                </div>

                {parametrs.map(param => (
                    <div className="col" key={param[1]}>
                        <h4>{param[0]}</h4>
                        <Parametr parametr={param[1]} logo={param[0]}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Parametrs
