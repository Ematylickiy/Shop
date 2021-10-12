import React from 'react'
import Parametr from './../ComparisonPage/Parametr';

function Parametrs({ data }) {
    const { display, camera, CPU, memory, RAM, battery, type, protection, screen } = data

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
            <div>
                    <img src="https://www.тэлефоны.бел/wp-content/themes/shopgsm/p_select/cable.png" alt="" />
                    <img src="https://www.тэлефоны.бел/wp-content/themes/shopgsm/p_select/iphone.png" alt="" />
                    <img src="https://cdn1.savepice.ru/uploads/2021/10/12/fab3f98e0ae39064f78f6a0f90dc60b8-full.png" alt="" />
                    <img src="https://cdn1.savepice.ru/uploads/2021/10/12/542748f4f0b9180c0a71046770e95e78-full.png" alt="" />
                    <img src="https://cdn1.savepice.ru/uploads/2021/10/12/5a73502a0ff5f28cf4acdd65c92c0156-full.png" alt="" />
            </div>
        </div>
    )
}

export default Parametrs
