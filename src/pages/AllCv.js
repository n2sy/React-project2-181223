import React, { useContext, useEffect } from 'react'
import Liste from '../components/Liste'
import Details from '../components/Details';
import candidatContext from '../store/CandidatsContext';

function AllCv() {
    let candCtx = useContext(candidatContext);
    useEffect(() => {
        candCtx.getAllCandidats();

    }, [])

    return (
        <div className='row'>
            <div className='col-6'>
                <Liste allCands={candCtx.tabCandidats}></Liste>
            </div>
            <div className='col-6'>
                <Details></Details>
            </div>
        </div>
    )
}

export default AllCv