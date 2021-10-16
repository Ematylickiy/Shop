import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckboxMemory from './CheckboxMemory';

function MemoryParametr({ title, size, state, setState, checkValueCheckboxes, parametr, setValueParametr, unit }) {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>{title}</AccordionSummary>
            <AccordionDetails>
              <div onChange={(e)=>checkValueCheckboxes(e, parametr, setValueParametr )}>
                {size.map(sizeMemory=><CheckboxMemory name={sizeMemory} state={state} setState={setState} key={sizeMemory} unit ={unit} />)}
              </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default MemoryParametr
