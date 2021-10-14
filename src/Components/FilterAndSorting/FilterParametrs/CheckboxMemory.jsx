import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function CheckboxMemory({ name }) {

    const [checked, setChecked] = useState(false)


    return (
            <FormControlLabel
            control={<Checkbox name={name} checked={checked} onChange={()=>setChecked(!checked) }/>}
                  label={`${name}Gb`} />
    )
}

export default CheckboxMemory
