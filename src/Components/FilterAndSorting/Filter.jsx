import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import './FilterAndSorting.css'
import getData from '../../request'
import RangeParametr from './FilterParametrs/RangeParametr';
import MemoryParametr from './FilterParametrs/MemoryParametr';



function Filter({sortDeviceList, typeDevice}) {

  let location = useLocation();

  const [dataServer, setDataServer] = useState()
   
  useEffect(() => {
    async function getDataDevice() {
      let currentPath = location.pathname.slice(1)
      const data = await getData()
      setDataServer(data[currentPath]);
    }
    getDataDevice() 
  }, [location.pathname]);



  useEffect(() => {
    function resetFilterParametrs() {
      setPhonesFilter({
        price: [400, 1900],
        display: [4.6, 6.8],
        checkBoxes: {
          64: false,
          128: false,
          256: false,
          4: false,
          6: false
        }
      })
      setCompFilter({
        price: [1700, 7000],
        display: [13.3, 27],
        checkBoxes: {
          8: false,
          16: false,
          32: false,
          256: false,
          512: false,
          1024: false
        }
      })
      setGadgetsFilter({
        price: [300, 520],
        checkBoxes: {
          40: false,
          44: false
        }
      })
      setCheckboxMemory([])
      setCheckboxRAM([])
    }
    resetFilterParametrs() 
  }, [location.pathname]);


  const defaultStatePhonesFilter = {
    price: [400, 1900],
    display: [4.6, 6.8],
    checkBoxes: {
      64: false,
      128: false,
      256: false,
      4: false,
      6: false
    }
  };

  const defaultStateComputersFilter = {
    price: [1700, 7000],
    display: [13.3, 27],
    checkBoxes: {
      8: false,
      16: false,
      32: false,
      256: false,
      512: false,
      1024: false
    }
  };

  const defaultStateGadgetsFilter = {
    price: [350, 520],
    checkBoxes: {
      40: false,
      44: false
    }
  }
  
  const [phonesFilter, setPhonesFilter] = useState(defaultStatePhonesFilter);
  const [compFilter, setCompFilter] = useState(defaultStateComputersFilter);
  const [gadgetsFilter, setGadgetsFilter] = useState(defaultStateGadgetsFilter);
  const [checkboxMemory, setCheckboxMemory] = useState([])
  const [checkboxRAM, setCheckboxRAM] = useState([])

  const resetFilter = () => {
    setPhonesFilter(defaultStatePhonesFilter)
    setCompFilter(defaultStateComputersFilter)
    setGadgetsFilter(defaultStateGadgetsFilter)
    setCheckboxMemory([])
    setCheckboxRAM([])
    sortDeviceList(dataServer)
  }

  const checkCheckboxes = (data, state, typeMemory) => {
    if (state.length) {
      return data.filter(item => state.indexOf(item[typeMemory].split(' ')[0]) > -1)
    }
    else return data
  }
  
  const filterDevices = (state, typeMemory = 'memory') => {
    let newData = dataServer.filter(item => item.price >= state.price[0] && item.price <= state.price[1]);
    newData = newData.filter(item => item.display.slice(0, -2) >= state.display[0] && item.display.slice(0, -2) <= state.display[1])
    newData = checkCheckboxes(newData, checkboxMemory, typeMemory)
    newData = checkCheckboxes(newData, checkboxRAM, 'RAM')
    sortDeviceList(newData)
  }


  const filter = () => {
    if (typeDevice === 'smartphones') {
      filterDevices(phonesFilter)
    };

    if (typeDevice === 'computers') {
      filterDevices(compFilter)
    };

    if (typeDevice === 'gadgets') {
      let newData = dataServer.filter(item => item.price >= gadgetsFilter.price[0] && item.price <= gadgetsFilter.price[1]);
      if (checkboxMemory.length) {
        newData = newData.filter(item => {
          return checkboxMemory.indexOf(item.display.split(' ')[0]) > -1
        })
      }
      sortDeviceList(newData)
    }
  }

  
  const filterRange = (parametr, newValue) => {
    if (typeDevice === 'smartphones') {
      setPhonesFilter({ ...phonesFilter, [parametr]: newValue })
    }
    if (typeDevice === 'computers') {
      setCompFilter({ ...compFilter, [parametr]: newValue })
    }
    if (typeDevice === 'gadgets') {
      setGadgetsFilter({ ...gadgetsFilter, [parametr]: newValue })
    }
    filter()
  }


  const checkValueCheckboxes = (e, parametr, setValueParametr) => {
    let newValueCheckboxes = parametr
    let checkedFalse = parametr.indexOf(e.target.name)
    e.target.checked ? newValueCheckboxes.push(e.target.name) : newValueCheckboxes.splice(checkedFalse, 1) 
    setValueParametr(newValueCheckboxes)
    filter()
  }


    return (
      <div className='wrapper-filter'>
        <h2>Filter</h2>
        {typeDevice === 'smartphones' ?
          <>
            <RangeParametr title='Price (USD)' state={phonesFilter}  step={50} min={100} max={2200} parametr='price' filterRange={filterRange}/>
            <RangeParametr title='Display size(")' state={phonesFilter}  step={0.1} min={4} max={7.2} parametr='display' filterRange={filterRange}/>

            <MemoryParametr title='Internal storage' size={['64', '128', '256']} state={phonesFilter} setState={setPhonesFilter} checkValueCheckboxes={checkValueCheckboxes} parametr={checkboxMemory} setValueParametr={setCheckboxMemory} unit={'Gb'}/>
            <MemoryParametr title='RAM' size={['4', '6']} state={phonesFilter} setState={setPhonesFilter} checkValueCheckboxes={checkValueCheckboxes} parametr={checkboxRAM} setValueParametr={setCheckboxRAM} unit={'Gb'}/>
          </>
          : typeDevice === 'computers' ?
          <>
            <RangeParametr title='Price (USD)' state={compFilter} filterRange={filterRange} step={50} min={1000} max={8000} parametr='price' />
            <RangeParametr title='Display size(")' state={compFilter} filterRange={filterRange} step={0.1} min={10} max={30} parametr='display' />

            <MemoryParametr title='Internal storage' size={['256', '512', '1024']} state={compFilter} setState={setCompFilter} checkValueCheckboxes={checkValueCheckboxes} parametr={checkboxMemory} setValueParametr={setCheckboxMemory} unit={'Gb'}/>
            <MemoryParametr title='RAM' size={['8', '16', '32']} state={compFilter} setState={setCompFilter} checkValueCheckboxes={checkValueCheckboxes} parametr={checkboxRAM} setValueParametr={setCheckboxRAM} unit={'Gb'}/>
          </>
          : typeDevice === 'gadgets' ?
          <>
            <RangeParametr title='Price (USD)' state={gadgetsFilter} filterRange={filterRange} step={1} min={200} max={600} parametr='price' />
            <MemoryParametr title='Display size(mm)' size={['40', '44']} state={gadgetsFilter} setState={setGadgetsFilter} checkValueCheckboxes={checkValueCheckboxes} parametr={checkboxMemory} setValueParametr={setCheckboxMemory} unit={'mm'}/>
          </>
          : ''    
    }

        <div onClick={resetFilter} className='wrapper-btn-reset-filter'>Reset</div>
      </div>
    );
}

export default Filter
