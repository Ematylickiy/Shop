import React from 'react'

function Parametr({ parametr, logo}) {
    
    return (
        <>
            {parametr ? 
                <div>
                    <div className={`${logo}-logo logo-describe`}></div>
                    <h6>{`${parametr}`}</h6>
                </div>
                : ''
        } 
        </>
    )
}

export default Parametr
