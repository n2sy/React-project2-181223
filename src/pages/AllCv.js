import React from 'react'
import Liste from '../components/Liste'
import Details from '../components/Details';

function AllCv() {
    return (
        <div className='row'>
            <div className='col-5'>
                <Liste></Liste>
            </div>
            <div className='col-5'>
                <Details></Details>
            </div>
        </div>
    )
}

export default AllCv