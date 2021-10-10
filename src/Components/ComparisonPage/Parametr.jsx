import React from 'react'

function Parametr({ parametr, logo, RAM }) {
    
    return (
        <>
            {parametr ? 
                <div>
                    <div className={`${logo}-logo logo-describe`}></div>
                    <h6>{`${parametr}`}</h6>
                    {RAM ? <h6>RAM size: {`${RAM}`}</h6> : ''}   
                </div>
                : ''
        } 
        </>
    )
}

export default Parametr
