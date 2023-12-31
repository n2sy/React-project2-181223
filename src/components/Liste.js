import React from 'react'
import ItemCv from './ItemCv'

function Liste(props) {
    return (
        <ol className='list-group'>
            {props.allCands.map((cand) => {
                return <ItemCv onchangeSelected={props.onchangeSelected} key={cand._id} oneCand={cand}></ItemCv>
            })}
        </ol>
    )
}

export default Liste