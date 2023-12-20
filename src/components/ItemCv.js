import React from 'react'

function ItemCv(props) {
    return (
        <li className='list-group-item' onClick={() => {
            props.onchangeSelected(props.oneCand)
        }}>
            <img style={{ height: '50px', width: '50px' }} src={`images/${props.oneCand.avatar}`}></img> {props.oneCand.prenom} {props.oneCand.nom}
        </li>
    )
}

export default ItemCv