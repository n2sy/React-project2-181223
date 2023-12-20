import React from 'react'
import ItemCv from './ItemCv'

function Liste() {
    return (
        <ol className='list-group'>
            <ItemCv></ItemCv>
            <ItemCv></ItemCv>
        </ol>
    )
}

export default Liste