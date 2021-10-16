import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function CheckboxMemory({ name, state, setState, unit }) {

    const handleChecked = () => setState({ ...state, checkBoxes: { ...state.checkBoxes, [name]: !state.checkBoxes[name] } })
    
    return (
            <FormControlLabel
            control={<Checkbox name={name} checked={state.checkBoxes[name]} onChange={handleChecked} />}
                  label={`${name}${unit}`} />
    )
}

export default CheckboxMemory
