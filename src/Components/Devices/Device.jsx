import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { addToCart, addToComparison, deleteFromCart, deleteFromComparison } from '../../Store/actions';
import { useDispatch, useSelector } from 'react-redux'


function Device({ data, device, showAlert, setvisibleAlertSuccess, setVisibleAlertWarning, setVisibleAlertError }) {
    let history = useHistory()
    const openDevicePage = id => {
        history.push(`${device}${id}`);
    }
    
    const { id, price, name, img } = data;
    data.count = 1;

    const dispatch = useDispatch();
    const stateCart = useSelector(state => state.cart);
    const stateCompasion = useSelector(state => state.comparison);

    const [btnAddtoCart, setBtnAddtoCart] = useState();
    const [btnAddtoComparison, setBtnAddtoComparison] = useState();

    useEffect(() => {
        function checkCart() {
            const isInCart = stateCart.some(item => item.name === name)
            setBtnAddtoCart(isInCart)
        }
        function checkComparison() {
            const isInComparison = stateCompasion.some(item => item.name === name)
            setBtnAddtoComparison(isInComparison)
        }
        checkCart()
        checkComparison()
    }, [name, stateCart, stateCompasion])


    const addProductToCompasion = () => {
        const isInComparison = stateCompasion.some(device => device.name === name);
        let productTypeBool = stateCompasion.some(device => device.type !== data.type)

        if (productTypeBool) {
            return showAlert('visible-alert', setVisibleAlertWarning)
        }
        if (stateCompasion.length > 3) {
            return showAlert('visible-alert', setVisibleAlertError)
        }
        if (isInComparison) {
            dispatch(deleteFromComparison(data))
        } else {
            return dispatch(addToComparison(data))
        }
    }


    const addProductToCart = () => {
        const isInCart = stateCart.some(item => item.name === name)
        const deviceInCart = stateCart.find(item => item.name === name)
        if (isInCart) {
            let amount = deviceInCart.count * price
            dispatch(deleteFromCart(data, amount))
            setBtnAddtoCart(!btnAddtoCart)

        } else {
            dispatch(addToCart(data))
            setBtnAddtoCart(!btnAddtoCart)
            showAlert('visible-alert', setvisibleAlertSuccess)
        }
    }


    return (
            <div className="col" title='iPhone'>
            <div className="card" >
                <div onClick={() => openDevicePage(id)}>
                    <div className='img' style={{ backgroundImage:`url(${img})`}}></div>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{price} $</p>
                    </div>
                </div>

                <div className='d-flex justify-content-between'>
                    <button type="button" className="btn btn-sm btn-link position-relative scales" onClick={addProductToCompasion}>
                        <img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9Ijg2IiB5MT0iNDEuODc5MzEiIHgyPSI4NiIgeTI9IjU0Ljg3MDY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzc2ZDRlNyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc2ZDRlNyI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI4NiIgeTE9IjEzLjg4NjMxIiB4Mj0iODYiIHkyPSIxNTkuMDE2NjkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMjNhZmNhIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjNhZmNhIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9Ijg2IiB5MT0iMTMuODg2MzEiIHgyPSI4NiIgeTI9IjE1OS4wMTY2OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0zIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyM2FmY2EiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyM2FmY2EiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik04Niw0M2MtMi45Njg1MywwIC01LjM3NSwyLjQwNjQ3IC01LjM3NSw1LjM3NWMwLDIuOTY4NTMgMi40MDY0Nyw1LjM3NSA1LjM3NSw1LjM3NWMyLjk2ODUzLDAgNS4zNzUsLTIuNDA2NDcgNS4zNzUsLTUuMzc1YzAsLTIuOTY4NTMgLTIuNDA2NDcsLTUuMzc1IC01LjM3NSwtNS4zNzV6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIj48L3BhdGg+PHBhdGggZD0iTTE0MC4wMTg3NSw1NC4xMTgxOWMxLjQ4ODg4LC0xLjQ2MiAyLjQxODc1LC0zLjQ5Mzc1IDIuNDE4NzUsLTUuNzQzMTljMCwtNC40NDUxMiAtMy42MTczOCwtOC4wNjI1IC04LjA2MjUsLTguMDYyNWgtMzQuNDMyMjVjLTIuMzYyMzEsLTQuMDcxNTYgLTYuNDQ3MzEsLTcuMDA2MzEgLTExLjI1NTI1LC03LjgyMDYydi01LjYxNjg3aC01LjM3NXY1LjYxNjg4Yy00LjgwNzk0LDAuODExNjIgLTguODkyOTQsMy43NDkwNiAtMTEuMjU1MjUsNy44MjA2M2gtMzQuNDMyMjVjLTQuNDQ1MTIsMCAtOC4wNjI1LDMuNjE3MzggLTguMDYyNSw4LjA2MjVjMCwyLjI0Njc1IDAuOTI5ODcsNC4yNzg1IDIuNDE4NzUsNS43NDMxOWwtMTUuODU2MjUsMzMuOTcyNjl2MC41OTY2M3Y1LjM3NWMwLDExLjg1NDU2IDkuNjQ1NDQsMjEuNSAyMS41LDIxLjVjMTEuODU0NTYsMCAyMS41LC05LjY0NTQ0IDIxLjUsLTIxLjV2LTUuMzc1di0wLjU5NjYzbC0xNC43NzMxOSwtMzEuNjUzMzdoMjcuNzAyNzVjMS40MTM2MiwyLjQzNzU2IDMuNDQyNjksNC40NjY2MyA1Ljg4MDI1LDUuODgwMjV2NTUuOTMyMjVoLTUuMzc1Yy00LjQ0NTEyLDAgLTguMDYyNSwzLjYxNzM4IC04LjA2MjUsOC4wNjI1djIuNjg3NWgtNS4zNzVjLTQuNDQ1MTMsMCAtOC4wNjI1LDMuNjE3MzggLTguMDYyNSw4LjA2MjV2MTguODEyNWg2OS44NzV2LTE4LjgxMjVjMCwtNC40NDUxMiAtMy42MTczOCwtOC4wNjI1IC04LjA2MjUsLTguMDYyNWgtNS4zNzV2LTIuNjg3NWMwLC00LjQ0NTEyIC0zLjYxNzM4LC04LjA2MjUgLTguMDYyNSwtOC4wNjI1aC01LjM3NXYtNTUuOTMyMjVjMi40Mzc1NiwtMS40MTM2MiA0LjQ2NjYyLC0zLjQ0NTM3IDUuODgwMjUsLTUuODgwMjVoMjcuNzAyNzVsLTE0Ljc2NzgxLDMxLjY1MzM3djAuNTk2NjN2NS4zNzVjMCwxMS44NTQ1NiA5LjY0NTQ0LDIxLjUgMjEuNSwyMS41YzExLjg1NDU2LDAgMjEuNSwtOS42NDU0NCAyMS41LC0yMS41di01LjM3NXYtMC41OTY2M3pNMzcuNjI1LDQ1LjY4NzVjMS40ODM1LDAgMi42ODc1LDEuMjA0IDIuNjg3NSwyLjY4NzVjMCwxLjQ4MzUgLTEuMjA0LDIuNjg3NSAtMi42ODc1LDIuNjg3NWMtMS40ODM1LDAgLTIuNjg3NSwtMS4yMDQgLTIuNjg3NSwtMi42ODc1YzAsLTEuNDgzNSAxLjIwNCwtMi42ODc1IDIuNjg3NSwtMi42ODc1ek0zNy42MjUsMTEwLjE4NzVjLTguODkyOTQsMCAtMTYuMTI1LC03LjIzMjA2IC0xNi4xMjUsLTE2LjEyNWgzMi4yNWMwLDguODkyOTQgLTcuMjMyMDYsMTYuMTI1IC0xNi4xMjUsMTYuMTI1ek01My40NzA1LDg4LjY4NzVoLTMxLjY5MWwxNS4wODc2MywtMzIuMzI1MjVjMC4yNTI2MiwwLjAyMTUgMC40OTcxOSwwLjA3NTI1IDAuNzU3ODcsMC4wNzUyNWgwLjc5NTV6TTQ1LjE5Myw1MS4wNjI1YzAuMzAxLC0wLjg0Mzg3IDAuNDk0NSwtMS43Mzg4MSAwLjQ5NDUsLTIuNjg3NWMwLC0wLjk0ODY5IC0wLjE5MzUsLTEuODQzNjMgLTAuNDk0NSwtMi42ODc1aDI0LjkyNjU2Yy0wLjE1MDUsMC44NzYxMyAtMC4yNDQ1NiwxLjc3MTA2IC0wLjI0NDU2LDIuNjg3NWMwLDAuOTE2NDQgMC4wOTQwNiwxLjgxMTM3IDAuMjQxODcsMi42ODc1ek04OC42ODc1LDEwNy41aC01LjM3NXYtNS4zNzVoNS4zNzV6TTg4LjY4NzUsOTYuNzVoLTUuMzc1di01LjM3NWg1LjM3NXpNMTAyLjEyNSwxNTAuNWgtMzIuMjV2LTUuMzc1aDMyLjI1ek0xMTIuODc1LDEzNC4zNzVjMS40ODM1LDAgMi42ODc1LDEuMjA0IDIuNjg3NSwyLjY4NzV2MTMuNDM3NWgtOC4wNjI1di02Ljc0ODMxYzAsLTIuMjA2NDQgLTEuNzk1MjUsLTQuMDAxNjkgLTQuMDAxNjksLTQuMDAxNjloLTM0Ljk5NjYzYy0yLjIwNjQ0LDAgLTQuMDAxNjksMS43OTUyNSAtNC4wMDE2OSw0LjAwMTY5djYuNzQ4MzFoLTguMDYyNXYtMTMuNDM3NWMwLC0xLjQ4MzUgMS4yMDQsLTIuNjg3NSAyLjY4NzUsLTIuNjg3NWg1LjM3NWg0M3pNMTAyLjEyNSwxMjYuMzEyNXYyLjY4NzVoLTMyLjI1di0yLjY4NzVjMCwtMS40ODM1IDEuMjA0LC0yLjY4NzUgMi42ODc1LC0yLjY4NzVoMjYuODc1YzEuNDgzNSwwIDIuNjg3NSwxLjIwNCAyLjY4NzUsMi42ODc1ek04My4zMTI1LDExOC4yNXYtNS4zNzVoNS4zNzV2NS4zNzV6TTg4LjY4NzUsODZoLTUuMzc1di0yMS43NDE4N2MwLjg3NjEzLDAuMTQ3ODEgMS43NzEwNiwwLjI0MTg3IDIuNjg3NSwwLjI0MTg3YzAuOTE2NDQsMCAxLjgxMTM3LC0wLjA5NDA2IDIuNjg3NSwtMC4yNDE4N3pNODYsNTkuMTI1Yy01LjkyODYyLDAgLTEwLjc1LC00LjgyMTM4IC0xMC43NSwtMTAuNzVjMCwtNS45Mjg2MiA0LjgyMTM4LC0xMC43NSAxMC43NSwtMTAuNzVjNS45Mjg2MywwIDEwLjc1LDQuODIxMzggMTAuNzUsMTAuNzVjMCw1LjkyODYyIC00LjgyMTM3LDEwLjc1IC0xMC43NSwxMC43NXpNMTM3LjA2MjUsNDguMzc1YzAsMS40ODM1IC0xLjIwNCwyLjY4NzUgLTIuNjg3NSwyLjY4NzVjLTEuNDgzNSwwIC0yLjY4NzUsLTEuMjA0IC0yLjY4NzUsLTIuNjg3NWMwLC0xLjQ4MzUgMS4yMDQsLTIuNjg3NSAyLjY4NzUsLTIuNjg3NWMxLjQ4MzUsMCAyLjY4NzUsMS4yMDQgMi42ODc1LDIuNjg3NXpNMTAxLjg4MzEzLDQ1LjY4NzVoMjQuOTI2NTZjLTAuMzAzNjksMC44NDM4NyAtMC40OTcxOSwxLjczODgxIC0wLjQ5NzE5LDIuNjg3NWMwLDAuOTQ4NjkgMC4xOTM1LDEuODQzNjMgMC40OTQ1LDIuNjg3NWgtMjQuOTIzODdjMC4xNDc4MSwtMC44NzYxMyAwLjI0MTg4LC0xLjc3MTA2IDAuMjQxODgsLTIuNjg3NWMwLC0wLjkxNjQ0IC0wLjA5NDA2LC0xLjgxMTM3IC0wLjI0MTg4LC0yLjY4NzV6TTEzNC4zNzUsMTEwLjE4NzVjLTguODkyOTQsMCAtMTYuMTI1LC03LjIzMjA2IC0xNi4xMjUsLTE2LjEyNWgzMi4yNWMwLDguODkyOTQgLTcuMjMyMDYsMTYuMTI1IC0xNi4xMjUsMTYuMTI1ek0xMTguNTI5NSw4OC42ODc1bDE1LjA1LC0zMi4yNWgwLjc5NTVjMC4yNjA2OSwwIDAuNTA1MjUsLTAuMDUzNzUgMC43NjA1NiwtMC4wNzUyNWwxNS4wODQ5NCwzMi4zMjUyNXoiIGZpbGw9InVybCgjY29sb3ItMikiPjwvcGF0aD48cGF0aCBkPSJNODYsMjEuNWMyLjk2NDMxLDAgNS4zNzUsMi40MTA2OSA1LjM3NSw1LjM3NWg1LjM3NWMwLC01LjkyODYyIC00LjgyMTM3LC0xMC43NSAtMTAuNzUsLTEwLjc1Yy01LjkyODYzLDAgLTEwLjc1LDQuODIxMzggLTEwLjc1LDEwLjc1aDUuMzc1YzAsLTIuOTY0MzEgMi40MTA2OSwtNS4zNzUgNS4zNzUsLTUuMzc1eiIgZmlsbD0idXJsKCNjb2xvci0zKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' width="55" alt="" />
                        <div className={`badge rounded-pill btn-add-cart-compare ${btnAddtoComparison ? 'check' : 'plus'}`}> </div>
                    </button>
                    <button type="button" className="btn btn-sm btn-link position-relative" onClick={addProductToCart}>
                        <img src='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9Ijg2IiB5MT0iNy4yOTM1NCIgeDI9Ijg2IiB5Mj0iMTY0LjM1MDM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFlOTNhZCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlOTNhZCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxNTUxOC4wNDE2MSIgeTE9IjExNTIuMzI3MzkiIHgyPSIxNTUxOC4wNDE2MSIgeTI9IjI0NzMxLjU4MzExIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFlOTNhZCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlOTNhZCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSI5NzM3LjQ5NzEyIiB5MT0iNzUwLjYwMTM3IiB4Mj0iOTczNy40OTcxMiIgeTI9IjE1NDg3LjcxNDcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFlOTNhZCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlOTNhZCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGc+PHBhdGggZD0iTTE2MC40MDA0MSw0OS4wNDY4OGgtMTEzLjExNjg3bC0yLjM1NzYxLC0xNC44MTA4MWMtMS4xNzQ0NCwtNy4zNzg4NyAtNy4yNzAwMiwtMTIuNzM2MDYgLTE0LjQ5NDAyLC0xMi43MzYwNmgtMTguODMyMzJjLTEuNDg0MjcsMCAtMi42ODc1LDEuMjAzMjMgLTIuNjg3NSwyLjY4NzVjMCwxLjQ4NDI3IDEuMjAzMjMsMi42ODc1IDIuNjg3NSwyLjY4NzVoMTguODMyMzJjNC41NjYwNiwwIDguNDI5MzQsMy41MTE1NSA5LjE4NjIxLDguMjY0MDZsMTUuNzc3OTgsOTkuMTQzNTVjMC40Mzg0OSwzLjI5NjQyIDMuMjMzMjMsNS43NjkzNiA2LjU1ODUxLDUuODAzMzJoNC4wNzAyMmMxLjI1Njc0LDYuMDQ2ODggNi4zMzI0MiwxMC4yODU3MyAxMi4zODc3LDEwLjI4NTczYzYuMDU1MjcsMCAxMS4xMzA5NSwtNC4yMzg4NiAxMi4zODc3LC0xMC4yODU3M2gzMi4yMTY0MWMxLjI1NzQxLDYuMDQ2ODggNi4zMzI3NiwxMC4yODg3NiAxMi4zODgwMywxMC4yODg3NmM2Ljk5NjkxLDAgMTIuNjg5NywtNS44ODQyOCAxMi42ODk3LC0xMy4xMTkwM2MwLC03LjIzNDc1IC01LjY5MjgsLTEzLjEyMjczIC0xMi42ODk3LC0xMy4xMjI3M2MtNi4xNTYzOSwwIC0xMS4zMDA5NCw0LjUzMTEzIC0xMi40NDg1LDEwLjU3OGgtMzIuMDk0OGMtMS4xNDc1NiwtNi4wNDY4NyAtNi4yOTI0NSwtMTAuNTgyMDMgLTEyLjQ0ODg0LC0xMC41ODIwM2MtNi4xNTYzOSwwIC0xMS4zMDEyNyw0LjUzNTE2IC0xMi40NDg4NCwxMC41ODIwM2gtMy45MzUxN2MtMC42Njk0OCwtMC4wMDgxNSAtMS4yMzAzOCwtMC41MDg4MyAtMS4zMTQxOSwtMS4xNzMwOWMtMC4wMDIwMiwtMC4wMTYxMyAtMC4wMDQzNywwLjAxNTQ1IC0wLjAwNzA1LDBsLTIuODY4OTEsLTE3Ljk3NTM0aDgwLjE0NTYyYzYuMTcyMjIsMC4wMDIzNyAxMS41MjE1NiwtNC4yNzM5MyAxMi44Nzg1LC0xMC4yOTUxNGwxMi4xNTY5MSwtNTIuNzg3NTRjMC4xODM1NiwtMC44MjA0NyAtMC4wMDU0OSwtMS42ODAxMSAtMC41MTYzNCwtMi4zNDc4N2MtMC41MDIyMiwtMC42NTkyNyAtMS4yNzQzMSwtMS4wNTc3MSAtMi4xMDI2MywtMS4wODUwOHpNMTM1LjQwNjY2LDEyOS41MTE2M2M0LjAzMzI3LDAgNy4zMTQ3LDMuNDc0NiA3LjMxNDcsNy43NDU3MWMwLDQuMjcxMTEgLTMuMjgxNDQsNy43NDUzNyAtNy4zMTQ3LDcuNzQ1MzdjLTQuMDMzMjcsMCAtNy4zMTM3LC0zLjQ3NDYgLTcuMzEzNywtNy43NDUzOGMwLC00LjI3MDc3IDMuMjc5NzYsLTcuNzQ1NzEgNy4zMTMwMiwtNy43NDU3MXpNNzguNDEzMTksMTI5LjUxMTYzYzQuMDMzMjcsMCA3LjMxNDcsMy40NzQ2IDcuMzE0Nyw3Ljc0NTcxYzAsNC4yNzExMSAtMy4yODE0NCw3Ljc0NTM3IC03LjMxNDcsNy43NDUzN2MtNC4wMzMyNywwIC03LjMxNDM3LC0zLjQ3NDYgLTcuMzE0MzcsLTcuNzQ1MzdjMCwtNC4yNzA3NyAzLjI4MDQzLC03Ljc0NTcxIDcuMzEzNywtNy43NDU3MXpNMTQ1LjYyNTIxLDEwNC4wMDEyMWMtMC43OTY5OSwzLjU4OTExIC0zLjk2NDg1LDYuMTUzNzggLTcuNjQxMjMsNi4xODYyOWgtODEuMDAxMjVsLTguODQyODgsLTU1Ljc2NTYyaDEwOC44ODQwNnoiIGZpbGw9InVybCgjY29sb3ItMSkiPjwvcGF0aD48cGF0aCBkPSJNMTAyLjg0NTU5LDEwNy43Njg3NWMxMy45MjcyMywwIDI1LjIxNzQ4LC0xMS4yOTAyNSAyNS4yMTc0OCwtMjUuMjE3NDhjMCwtMTMuOTI3MjMgLTExLjI5MDI1LC0yNS4yMTc0OCAtMjUuMjE3NDgsLTI1LjIxNzQ4Yy0xMy45MjcyMywwIC0yNS4yMTc0OCwxMS4yOTAyNSAtMjUuMjE3NDgsMjUuMjE3NDhjMC4wMTU3NCwxMy45MjA3MSAxMS4yOTY3OCwyNS4yMDE3NSAyNS4yMTc0OCwyNS4yMTc0OHpNMTAyLjg0NTU5LDYyLjcwOTEyYzguMDI1NTcsMCAxNS4yNjA4OCw0LjgzNDUgMTguMzMyMSwxMi4yNDkxN2MzLjA3MTIyLDcuNDE0NjcgMS4zNzM1MiwxNS45NDkzIC00LjMwMTQ2LDIxLjYyNDE5Yy01LjY3NDk4LDUuNjc0ODggLTE0LjIwOTY0LDcuMzcyNDQgLTIxLjYyNDI2LDQuMzAxMDljLTcuNDE0NjIsLTMuMDcxMzUgLTEyLjI0OSwtMTAuMzA2NzQgLTEyLjI0ODg2LC0xOC4zMzIzYzAuMDEzMTQsLTEwLjk1Mjk4IDguODg5NSwtMTkuODI4NTkgMTkuODQyNDgsLTE5Ljg0MDh6IiBmaWxsPSJ1cmwoI2NvbG9yLTIpIj48L3BhdGg+PHBhdGggZD0iTTg5Ljc3MTkxLDg0LjY1NjI1aDEwLjMzNzQ3djEwLjQwNDk5YzAsMS40ODQyNyAxLjIwMzIzLDIuNjg3NSAyLjY4NzUsMi42ODc1YzEuNDg0MjcsMCAyLjY4NzUsLTEuMjAzMjMgMi42ODc1LC0yLjY4NzV2LTEwLjQwNDk5aDEwLjQzNDg5YzEuNDg0MjcsMCAyLjY4NzUsLTEuMjAzMjMgMi42ODc1LC0yLjY4NzVjMCwtMS40ODQyNyAtMS4yMDMyMywtMi42ODc1IC0yLjY4NzUsLTIuNjg3NWgtMTAuNDM0ODl2LTEwLjM2NzAzYzAsLTEuNDg0MjcgLTEuMjAzMjMsLTIuNjg3NSAtMi42ODc1LC0yLjY4NzVjLTEuNDg0MjcsMCAtMi42ODc1LDEuMjAzMjMgLTIuNjg3NSwyLjY4NzV2MTAuMzY3MDNoLTEwLjMzNzQ3Yy0xLjQ4NDI3LDAgLTIuNjg3NSwxLjIwMzIzIC0yLjY4NzUsMi42ODc1YzAsMS40ODQyNyAxLjIwMzIzLDIuNjg3NSAyLjY4NzUsMi42ODc1eiIgZmlsbD0idXJsKCNjb2xvci0zKSI+PC9wYXRoPjwvZz48L2c+PC9zdmc+' width="55" alt="" />
                        <div className={`badge rounded-pill btn-add-cart-compare ${btnAddtoCart ? 'check' : 'plus'}`}> </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Device
