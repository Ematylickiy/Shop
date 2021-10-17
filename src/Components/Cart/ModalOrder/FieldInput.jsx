import React, { useEffect, useState } from 'react'

function FieldInput({ placeholder, name, type, min }) {
    

    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(localStorage.getItem(name))
    }, [name]);



    return (
            <input className="form-control"
                    type={type}
                    placeholder={placeholder}
                    min = {min ? min : ''}
                    required
                    name={name}
                    value={value || ''}
                    onChange={(e) => setValue(e.target.value)}
            />
    )
}

export default FieldInput
