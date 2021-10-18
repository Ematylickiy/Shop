import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import './FilterAndSorting.css'

function Sorting({data, sortDeviceList}) {

    const [stateBtnSort, setStateBtnSort] = useState('DEFAULT')
    let location = useLocation();

    useEffect(() => {
        const resetSelect = () => setStateBtnSort('DEFAULT');
        resetSelect()
    }, [location.pathname])
    

    const changeSelectList = (value) => {
        setStateBtnSort(value)
        let newData = [...data]
        if (value === 'ascending') {
            newData = newData.sort((prev, current) => prev.price - current.price)
            sortDeviceList(newData)
        }
        if (value === 'descending') {
            newData = newData.sort((prev, current) => current.price - prev.price)
            sortDeviceList(newData)
        }
    }


    return (
        <select value={stateBtnSort} onChange = {(e)=>changeSelectList(e.target.value)}>
            <option value="DEFAULT" disabled>Sort by</option>
            <option value="ascending">Price &#9650;</option>
            <option value="descending">Price &#9660;</option>
        </select>
    )
}

export default Sorting
