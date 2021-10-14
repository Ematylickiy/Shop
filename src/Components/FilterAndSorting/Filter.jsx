import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import './FilterAndSorting.css'
import { Slider } from '@mui/material';
import CheckboxMemory from './FilterParametrs/CheckboxMemory';
import { addToFilteredList } from '../../Store/actions';



function Filter({ data }) {
  const dispatch = useDispatch()
  const [filteredList , setFilteredList] = useState(data)
  const [valueDisplay, setValueDisplay] = useState([4.6, 6.8]);
  const [price, setPrice] = useState([400, 1900]) 
  const [checkboxMemory, setCheckboxMemory] = useState([])
  const [checkboxRAM, setCheckboxRAM] = useState([])
   
  
  const filter = () => {
    let newData = data.filter(item => {
      return item.price >= price[0] && item.price <= price[1]
    })

    newData = newData.filter(item => {
      return item.display.slice(0, -2) >= valueDisplay[0] && item.display.slice(0, -2) <= valueDisplay[1]
    })
    if (checkboxMemory.length) {
      newData = newData.filter(item => {
        return checkboxMemory.indexOf(item.memory.split(' ')[0]) > -1
      })
    }
    if (checkboxRAM.length) {
      newData = newData.filter(item => {
        return checkboxRAM.indexOf(item.RAM.split(' ')[0]) > -1
      })
    }
    setFilteredList(newData)
  }
  
  
  const filterByPrice = (event, newValue) => {
    setPrice(newValue)
    filter()
  }
  
  const filterByDisplay = (event, newValue) => {
    setValueDisplay(newValue);
    filter()
  };

  //////////////////////////////////////////// refactor ////////////////////////////
  const filterByStorage = (e) => {
    if (e.target.checked) {
      let newValueCheckboxes = checkboxMemory
      newValueCheckboxes.push(e.target.name)
      setCheckboxMemory(newValueCheckboxes)
    }
    else {
      let checkedFalse = checkboxMemory.indexOf(e.target.name)
      let newValueCheckboxes = checkboxMemory
      newValueCheckboxes.splice(checkedFalse, 1) 
      setCheckboxMemory(newValueCheckboxes)
    }
    filter()
  }


  const filterByRAM = (e) => {
    if (e.target.checked) {
      let newValueCheckboxes = checkboxRAM
      newValueCheckboxes.push(e.target.name)
      setCheckboxRAM(newValueCheckboxes)
    }
    else {
      let checkedFalse = checkboxRAM.indexOf(e.target.name)
      let newValueCheckboxes = checkboxRAM
      newValueCheckboxes.splice(checkedFalse, 1) 
      setCheckboxRAM(newValueCheckboxes)
    }
    filter()
  }

  const showFilteredList = () => {
    dispatch(addToFilteredList(filteredList))
  }
  
  

  const resetFilter = () => {
    setValueDisplay([4.6, 6.8])
    setPrice([400, 1900])
    setCheckboxMemory([])
    setCheckboxRAM([])
    dispatch(addToFilteredList(data))
    setFilteredList(data)
  }



    return (
      <>
       <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Price (USD)</AccordionSummary>
          <AccordionDetails>
              <div className='d-flex justify-content-between'>
                <span>from {price[0]}</span>
                <span>to {price[1]}</span>
              </div>
                <Slider
                  value={price}
                  onChange={filterByPrice}
                  step={50}
                  min={100}
                  max={2000}
              />
          </AccordionDetails>
        </Accordion>
        


      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>Display size(")</AccordionSummary>
          <AccordionDetails>
              <div className='d-flex justify-content-between'>
                <span>from {valueDisplay[0]}</span>
                <span>to {valueDisplay[1]}</span>
              </div>
                <Slider
                  value={valueDisplay}
                  onChange={filterByDisplay}
                  step={0.1}
                  min={4}
                  max={7}
              />
        </AccordionDetails>
        </Accordion>

        

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>Internal storage</AccordionSummary>
          <AccordionDetails>
            <div onChange={filterByStorage}>
              <CheckboxMemory name='64'  />
              <CheckboxMemory name='128'  />
              <CheckboxMemory name='256'  />
            </div>
          </AccordionDetails>
        </Accordion>


        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}>RAM</AccordionSummary>
          <AccordionDetails>
              <div onChange={filterByRAM}>
                <CheckboxMemory name='6'  />
                <CheckboxMemory name='4'  />
              </div>
          </AccordionDetails>
        </Accordion>
        <button onClick={showFilteredList} className='btn btn-info'>Show ({filteredList.length})</button>
        <button onClick={resetFilter} className='btn btn-danger'>Reset</button>
      </>
    );
}

export default Filter
