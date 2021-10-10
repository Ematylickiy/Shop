import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import getData from '../../request'

function SearchPanel() {

    let history = useHistory()

    const [resultSearch, setResultSearch] = useState([])
    const [value, setValue] = useState('')
    const [data, setData] = useState('')

    const searchDevice = (valueInp) => {
        setValue(valueInp)
        let aim = []
        if (valueInp) {
            if (data) {
                for (let key in data) {
                    let test = data[key].filter(item => item['name'].toLowerCase().indexOf(valueInp.toLowerCase()) > -1)
                    aim = [...aim, ...test]
                }
                if (aim.length > 4) {
                    aim.length = 4
                }
                setResultSearch(aim)
            }
        }
        else setResultSearch('')
    }

    useEffect(() => {
        async function getDataDevice() {
            const data = await getData()
            setData(data);
        }
        getDataDevice() 
    },[]);


    const showPageDevice = (id, type) => {
        history.push(`/${type}/${id}`)
        setValue('')
        setResultSearch('')
    }

    return (
        <div className='wrap-searchPanel'>
            <form className="d-flex">
                <input className="searchPanel"
                    type="search"
                    placeholder="Search"
                    value={value}
                    onChange={(e) => searchDevice(e.target.value)} />
            </form>

            <ul className='searchResults list-group'>
                {resultSearch.length
                    ?
                    resultSearch.map(({ id, price, type, img, name }) => (
                        <li key={name} className='list-group-item'>
                            <div className='d-flex'>
                                <img className='img-search'src={img} alt="" />
                                <div>
                                    <h6 onClick={() => showPageDevice(id, type)} >{name}</h6>
                                    <span>{price}.00 $</span>
                                </div>
                            </div>
                        </li>
                )) : ''}
            </ul>

        </div>  
    )
}

export default SearchPanel
