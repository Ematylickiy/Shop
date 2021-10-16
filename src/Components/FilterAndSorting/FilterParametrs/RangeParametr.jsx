import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Slider } from '@mui/material';


function RangeParametr({ title, state, step, min, max, parametr, filterRange }) {


    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
            <AccordionDetails>
                <div className='d-flex justify-content-between'>
                    <span>from {state[parametr][0]}</span>
                    <span>to {state[parametr][1]}</span>
                </div>
                    <Slider
                    value={state[parametr]}
                    onChange={(e)=>filterRange(parametr, e.target.value)}
                    step={step}
                    min={min}
                    max={max}
                />
            </AccordionDetails>
        </Accordion>
    )
}

export default RangeParametr
