import React from 'react'
import Parametr from './../ComparisonPage/Parametr';

function Parametrs({ data }) {
    const { display, camera, CPU, memory, RAM, battery, type, protection, screen } = data

    let parametrs = type === 'gadgets'
        ?
        [['battery', battery], ['protection', protection]]
        :
        [['camera', camera], ['CPU', CPU], ['RAM', RAM], ['battery', battery]]
    
    return (
        <div className='container text-center parametrs'>
            <div className="row">
                <div className="col">
                    <h4>Screen diagonal</h4>
                    <Parametr parametr={display} logo={'display'}/>
                    <h6>{screen}</h6>
                </div>
                <div className="col">
                    <h4>Memory</h4>
                    <Parametr parametr={memory} logo={'memory'}/>
                </div>

                {parametrs.map(param => (
                    <div className="col" key={param[1]}>
                        <h4>{param[0][0].toUpperCase()+param[0].slice(1)}</h4>
                        <Parametr parametr={param[1]} logo={param[0]}/>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Parametrs
